from django.core.validators import RegexValidator
from django.db import models


VIDEO_PROVIDER_CHOICES = (
    ("YOUTUBE", "Youtube"),
    ("FACEBOOK", "Facebook"),
    ("INSTAGRAM", "Instagram"),
    ("VIMEO", "Vimeo"),
)


REGEX_PHONE = RegexValidator(r'^(?!0|1|2|3|4|5)[0-9]{10}$', 'Invalid mobile number!')


class TimestampModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
