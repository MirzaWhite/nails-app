import graphene
import datetime
from django.core.validators import validate_email
from graphql import GraphQLError
from graphql_relay import from_global_id

from apps.appointment.models import Slot, BookAppointment
from apps.product.models import Product
from apps.site_setting.utils import booking_appointment_email_conf
from apps.store.models import Store
from graph_api.appointment.enum import BookingTypeEnum
from graph_api.appointment.utils import convert_global_id_to_instance, sending_mail
from graph_api.contact.utils import validate_phone_number


class BookAppointmentForm(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True, description='name of the user')
        email = graphene.String(required=True, description='email of the user')
        phone_number = graphene.String(required=True, description='phone number of user')
        date = graphene.String(required=True, description='Booking date')
        time_id = graphene.ID(required=True, description='Booking slot')
        store_id = graphene.ID(required=True, description='Booking store')
        product_id = graphene.ID(description='Product for booking')
        service_ids = graphene.List(graphene.ID, description='Services for booking')
        booking_type = BookingTypeEnum(required=True)

    message = graphene.String()

    def mutate(self, info, name, email, phone_number, date, time_id, store_id, booking_type, **kwargs):
        product = None
        appointment_obj = None
        services = None
        product_id = kwargs.get('product_id')
        service_ids = kwargs.get('service_ids')
        if booking_type == 'PRODUCT':
            if not product_id:
                raise GraphQLError('Must provide product id')

        if booking_type == 'SERVICE':
            if not service_ids:
                raise GraphQLError('Must provide service ids')

        if product_id and service_ids:
            raise GraphQLError('Provide either product or services')

        if name is None or len(name) == 0:
            raise GraphQLError('Please enter valid name')
        if date is None or len(date) == 0:
            raise GraphQLError('Please enter valid date')

        date_format = '%d-%m-%Y'
        try:
            date_obj = datetime.datetime.strptime(str(date), date_format)
        except ValueError:
            raise GraphQLError("Incorrect data format, should be DD-MM-YYYY.")

        validate_email(email)
        validate_phone_number(phone_number)
        try:
            time_id = from_global_id(time_id)[1]
            slot = Slot.objects.get(id=time_id)
        except ValueError:
            raise GraphQLError('Invalid slot id')
        except Slot.DoesNotExist:
            raise GraphQLError('Slot does not exist')

        try:
            store_id = from_global_id(store_id)[1]
            store = Store.objects.get(id=store_id)
        except ValueError:
            raise GraphQLError('Invalid store id')
        except Store.DoesNotExist:
            raise GraphQLError('Store does not exist')

        if product_id:
            try:
                product_id = from_global_id(product_id)[1]
                product = Product.objects.get(id=product_id)
            except Product.DoesNotExist:
                raise GraphQLError('Product does not exist')
            except ValueError:
                raise GraphQLError('Invalid product id')
            appointment_obj = BookAppointment.objects.create(
                name=name,
                email=email,
                phone_number=phone_number,
                date=date_obj,
                time=slot,
                store=store,
                product=product,
                booking_type=booking_type,
            )

        if service_ids:
            services = convert_global_id_to_instance(service_ids)
            appointment_obj = BookAppointment.objects.create(
                name=name,
                email=email,
                phone_number=phone_number,
                date=date_obj,
                time=slot,
                store=store,
                booking_type=booking_type,
            )
            for service in services:
                appointment_obj.service.add(service)

        # Get email configurations for booking Form
        email_setting_to_customers = booking_appointment_email_conf("TO_CUSTOMER")
        email_setting_to_admin = booking_appointment_email_conf("TO_ADMIN")

        # Format the booking address
        if appointment_obj.store:
            booking_address = f"{appointment_obj.store.address_line1},\n"
            if appointment_obj.store.address_line2:
                booking_address += f"{appointment_obj.store.address_line2},\n"
            if appointment_obj.store.landmark:
                booking_address += f"{appointment_obj.store.landmark},\n"
            booking_address += f"{appointment_obj.store.area},\n{appointment_obj.store.state},\n{appointment_obj.store.city},\n{appointment_obj.store.pincode}"

        else:
            # Handle the case when the store is not selected for the booking.
            booking_address = "No store selected"

        # Send Mail to customer after submitting the form
        sending_mail(email_setting_to_customers, email, customer_name=name)

        # Send customer details via Mail to admin after submitting the form
        sending_mail(email_setting_to_admin, email, customer_name=name, branch_name=store.name,
                     appointment_date=date,
                     appointment_time=slot,
                     selected_product=appointment_obj.product.name if product else None,
                     selected_service=', '.join(
                         service.name for service in services) if services else None,
                     contact_number=phone_number, contact_email=email, booking_address=booking_address)

        return BookAppointmentForm(message='Appointment booked successfully')


class AppointmentMutation(graphene.ObjectType):
    book_appointment = BookAppointmentForm.Field()
