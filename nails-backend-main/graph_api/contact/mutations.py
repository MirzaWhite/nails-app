import graphene
from django.core.validators import validate_email
from graphql_relay import from_global_id

from apps.contact.models import ContactUs, Subscribe
from apps.home.models import City, State
from graph_api.contact.enum import ContactFormEnum
from graphql import GraphQLError

from graph_api.contact.types import ContactType
from graph_api.contact.utils import validate_phone_number


class ContactUsForm(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True, description='Full name of user')
        phone_number = graphene.String(required=True, description='10 digit phone number of user')
        message = graphene.String(description='User\'s message')
        email = graphene.String(description='Valid email address')
        city_id = graphene.ID(description='City id')
        state_id = graphene.ID(description='State id')
        form_type = ContactFormEnum(required=True, description='Type of form')

    message = graphene.String()
    contact = graphene.Field(ContactType)

    def mutate(self, info, name, phone_number, form_type, **kwargs):
        validate_phone_number(phone_number)
        if name is None or len(name) == 0:
            raise GraphQLError('Please provide valid name')

        if form_type == 'NORMAL':
            contact = ContactUs.objects.create(
                name=name,
                phone_number=phone_number,
                form_type=form_type
            )
            if message := kwargs.get('message'):
                contact.message = message
            contact.save(update_fields=['message'])
            return ContactUsForm(message='Submitted successfully!', contact=contact)
        else:
            if email := kwargs.get('email'):
                validate_email(email)
            else:
                raise GraphQLError('Please provide valid email')

            if state_id := kwargs.get('state_id'):
                if state_id is None or len(state_id) == 0:
                    raise GraphQLError('Please enter valid state id')
                try:
                    state_id = from_global_id(state_id)[1]
                    state = State.objects.get(id=state_id)
                except ValueError:
                    raise GraphQLError('invalid state ID')
                except State.DoesNotExist:
                    raise GraphQLError('state does not exist')
            else:
                raise GraphQLError('state id is must!')

            if city_id := kwargs.get('city_id'):
                if city_id is None or len(city_id) == 0:
                    raise GraphQLError('Please enter valid city id!')
                try:
                    city_id = from_global_id(city_id)[1]
                    city = City.objects.get(id=city_id)
                except ValueError:
                    raise GraphQLError('invalid city id!')
                except City.DoesNotExist:
                    raise GraphQLError('city does not exist!')
            else:
                raise GraphQLError('city id is must')

            if state and city:
                if city.state != state:
                    raise GraphQLError(f'{city.name} is not in {state.name}')
            contact = ContactUs.objects.create(
                name=name,
                phone_number=phone_number,
                state=state,
                city=city,
                form_type=form_type
            )
            if message := kwargs.get('message'):
                contact.message = message
            contact.save(update_fields=['message'])
            return ContactUsForm(message='Submitted successfully!', contact=contact)


class SubscribeForm(graphene.Mutation):
    class Arguments:
        email = graphene.String(required=True)

    message = graphene.String()

    def mutate(self, info, email):
        validate_email(email)
        if Subscribe.objects.filter(email=email).exists():
            return SubscribeForm(message=f'{email} already subscribed!')
        Subscribe.objects.create(
            email=email
        )
        return SubscribeForm(message='Subscribed successfully!')


class ContactMutation(graphene.ObjectType):
    contact_us = ContactUsForm.Field()
    subscribe = SubscribeForm.Field()
