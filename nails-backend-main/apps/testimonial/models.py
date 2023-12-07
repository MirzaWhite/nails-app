from django.db import models

from apps.core.models import TimestampModel
from django.core.validators import ValidationError
from versatileimagefield.fields import VersatileImageField
from django.core.validators import MaxValueValidator, MinValueValidator

TESTIMONIAL_TYPE = (
    ('CLIENT', 'CLIENT'),
    ('CELEBRITY', 'CELEBRITY'),
    ('FRANCHISE', 'FRANCHISE'),
)


class Testimonial(TimestampModel):
    name = models.CharField(max_length=75)
    description = models.TextField()
    mobile_image = VersatileImageField(upload_to='testimonial/mobile_images', null=True, blank=True)
    desktop_image = VersatileImageField(upload_to='testimonial/desktop_images', null=True, blank=True)
    role = models.CharField(max_length=30, null=True, blank=True)
    rating = models.PositiveSmallIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)],
                                              null=True,
                                              blank=True)
    is_active = models.BooleanField(default=True)
    testimonial_type = models.CharField(max_length=30, choices=TESTIMONIAL_TYPE)
    sort_order = models.PositiveSmallIntegerField(default=0)

    class Meta:
        verbose_name_plural = 'Testimonials'
        ordering = ('sort_order',)

    def __str__(self):
        return self.name

    def clean(self):
        if self.testimonial_type == 'FRANCHISE':
            if not self.role or not self.rating:
                raise ValidationError('Role and rating is must for franchise testimonial')
