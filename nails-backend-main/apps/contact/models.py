from django.db import models

from apps.core.models import TimestampModel, REGEX_PHONE
from apps.home.models import City, State
from django.core.validators import validate_email

FORM_TYPE_CHOICES = (
    ('NORMAL', 'NORMAL'),
    ('FRANCHISE', 'FRANCHISE')
)


class ContactUs(TimestampModel):
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=10, validators=[REGEX_PHONE])
    message = models.TextField(null=True, blank=True)
    email = models.EmailField(max_length=255, null=True, blank=True)
    state = models.ForeignKey(State, on_delete=models.CASCADE, related_name='contact_us', null=True, blank=True)
    city = models.ForeignKey(City, on_delete=models.CASCADE, related_name='contact_us', null=True, blank=True)
    form_type = models.CharField(max_length=30, choices=FORM_TYPE_CHOICES)
    sender_email = models.EmailField(max_length=255, null=True, blank=True)

    class Meta:
        verbose_name_plural = 'Contact Us'

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if self.email:
            validate_email(self.email)
        if self.sender_email:
            validate_email(self.sender_email)
        super(ContactUs, self).save(*args, **kwargs)


class Subscribe(TimestampModel):
    email = models.EmailField(max_length=255)
    sender_email = models.EmailField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.email

    def save(self, *args, **kwargs):
        validate_email(self.email)
        if self.sender_email:
            validate_email(self.sender_email)
        super(Subscribe, self).save(*args, **kwargs)
