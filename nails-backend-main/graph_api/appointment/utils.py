import os
from typing import List

from graph_api.product.utils import convert_global_id_list_to_django_id_list
from apps.product.models import Service
from graphql import GraphQLError
import threading
from django.core.mail import EmailMessage

# env variables
ADMIN_EMAIL = os.environ.get("ADMIN_EMAIL", "care@nailsnbeyond.in")

def convert_global_id_to_instance(global_ids: List) -> List:
    model_ids = convert_global_id_list_to_django_id_list(global_ids)
    services = []
    for model_id in model_ids:
        try:
            service = Service.objects.get(id=model_id)
            services.append(service)
        except Service.DoesNotExist:
            raise GraphQLError('Invalid Service')
    return services


def validate_phone_number(mobile_number):
    """
    Validating user given mobile number has valid length or not

    :param mobile_number: (integer) mobile number to validate
    :return: Exception
    """
    if mobile_number:
        if len(str(mobile_number)) != 10:
            raise Exception('Enter a valid mobile Number')
        if not str(mobile_number).isnumeric():
            raise Exception('Mobile Number should be Integer')
    else:
        raise Exception("Mobile Number Cannot be empty")


# EmailThread class to send email in the background
class EmailThread(threading.Thread):
    def __init__(self, subject, message, from_email, recipient_list):
        self.subject = subject
        self.message = message
        self.from_email = from_email
        self.recipient_list = recipient_list
        threading.Thread.__init__(self)

    def run(self):
        try:
            msg = EmailMessage(self.subject, self.message, self.from_email, self.recipient_list)
            msg.content_subtype = "html"
            msg.send()
        except Exception as e:
            print(f"WHILE SENDING MAIL - {e}")


def sending_mail(email_setting, email, customer_name, branch_name=None, appointment_date=None,
                 appointment_time=None,
                 selected_service=None, selected_product=None, contact_number=None, contact_email=None,
                 booking_address=None):
    """
    Sends an email to customer and admin after submitting the form.
    """
    text = ''
    recipient_list = []
    if email_setting is not None:
        try:
            sender_email, subject, message, sending_type = email_setting
            if sending_type == "TO_ADMIN":
                # Determine whether to use "Services" or "Product" based on selected_service and selected_product
                services_or_product = "Services" if selected_service else "Product"
                # Determine whether to use "selected_service" or "selected_product" based on selected_service and selected_product
                selected_services_or_product = selected_service if selected_service else selected_product

                # Replace and format the text when sending email TO ADMIN
                text = message.format(
                    branch_name=branch_name,
                    customer_name=customer_name,
                    appointment_date=appointment_date,
                    appointment_time=appointment_time,
                    services_or_product=services_or_product,
                    selected_services_or_product=selected_services_or_product,
                    selected_product=selected_product,
                    contact_number=contact_number,
                    contact_email=contact_email,
                    booking_address=booking_address
                )
                recipient_list = [ADMIN_EMAIL]
            elif sending_type == "TO_CUSTOMER":
                # Format the text used when sending email TO CUSTOMER
                text = message.format(
                    customer_name=customer_name
                )
                recipient_list = email.split()
            else:
                print("Invalid sending_type")

            formatted_text = f"<pre style='font-family: Arial, sans-serif;'>{text}</pre>"

            # Send mail in the background using EmailThread
            EmailThread(subject, formatted_text, sender_email, recipient_list).start()

        except Exception as e:
            print(f"Exception while setting email {e}")
