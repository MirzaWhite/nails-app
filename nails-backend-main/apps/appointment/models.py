from django.db import models
from apps.product.models import Product, Service
from apps.store.models import Store

from apps.core.models import TimestampModel, REGEX_PHONE


BOOKING_TYPE_CHOICES = (
    ('PRODUCT', 'PRODUCT'),
    ('SERVICE', 'SERVICE'),
)


class Slot(TimestampModel):
    time = models.CharField(max_length=50)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = 'Slots'

    def __str__(self):
        return self.time


class BookAppointment(TimestampModel):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=255)
    phone_number = models.CharField(max_length=10, validators=[REGEX_PHONE])
    date = models.DateField()
    time = models.ForeignKey(Slot, on_delete=models.CASCADE, related_name='book_appointments')
    store = models.ForeignKey(Store, on_delete=models.CASCADE, related_name='book_appointments')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='book_appointments', null=True, blank=True)
    service = models.ManyToManyField(Service, related_name='book_appointments', blank=True)
    booking_type = models.CharField(max_length=20, choices=BOOKING_TYPE_CHOICES)

    class Meta:
        verbose_name_plural = 'Book Appointments'

    def __str__(self):
        return self.name
