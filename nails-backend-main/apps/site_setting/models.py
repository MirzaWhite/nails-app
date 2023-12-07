from django.db import models
from apps.core.models import TimestampModel

EMAIL_SEND_TYPE_CHOICES = (
    ('TO_CUSTOMER', 'To Customer'),
    ('TO_ADMIN', 'To Admin'),
)

class EmailSetting(TimestampModel):
    sending_type = models.CharField(max_length=200, choices=EMAIL_SEND_TYPE_CHOICES, help_text="The Email sending type")
    from_email = models.EmailField(help_text="From Email ID")
    subject = models.CharField(max_length=200, blank=True, null=True, help_text="Email Subject")
    message = models.TextField(blank=True, null=True, help_text="Email Message/Content")
    is_active = models.BooleanField(default=True, help_text="Is this email is an Active?")

    def __str__(self):
        return self.from_email

    class Meta:
        ordering = ("-id",)
