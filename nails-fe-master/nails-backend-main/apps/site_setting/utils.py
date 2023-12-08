from django.core.cache import cache
from apps.site_setting.models import EmailSetting


def booking_appointment_email_conf(sending_type: str) -> list:
    """
    Email setting for Book Appointment Form
    gets the email configuration from admin and set it in cache for 24 hrs
    :returns: cached email data or get email data from db
    """
    if sending_type == "TO_CUSTOMER":
        cache_key = f'to_customer_email_conf'
    else:
        cache_key = f'to_admin_email_conf'
    email_conf = cache.get(cache_key)
    if not email_conf:
        try:
            if sending_type == "TO_CUSTOMER":  # fetch email conf for 'TO CUSTOMER'
                email_conf = \
                    EmailSetting.objects.filter(sending_type="TO_CUSTOMER", is_active=True).values_list('from_email',
                                                                                                        'subject',
                                                                                                        'message',
                                                                                                        'sending_type',
                                                                                                        )[0]
                cache.set(cache_key, [email_conf], 60 * 60 * 24)  # set cache for 24 hours
            elif sending_type == "TO_ADMIN":  # fetch email conf for 'TO ADMIN'
                email_conf = \
                    EmailSetting.objects.filter(sending_type="TO_ADMIN", is_active=True).values_list('from_email',
                                                                                                     'subject',
                                                                                                     'message',
                                                                                                     'sending_type',
                                                                                                     )[0]
                cache.set(cache_key, [email_conf], 60 * 60 * 24)  # set cache for 24 hours

        except AttributeError:
            email_conf = None
        except IndexError:
            email_conf = None
    else:
        email_conf = list(email_conf[0])
    if email_conf is not None:
        return list(email_conf)
