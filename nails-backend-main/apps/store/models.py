from django.core.validators import validate_email
from django.db import models

from apps.core.models import TimestampModel, REGEX_PHONE
from apps.home.models import State, City


class Store(TimestampModel):
    name = models.CharField(max_length=75)
    address_line1 = models.CharField(max_length=150)
    address_line2 = models.CharField(max_length=150)
    landmark = models.CharField(max_length=75, null=True, blank=True)
    area = models.CharField(max_length=75)
    state = models.ForeignKey(State, on_delete=models.CASCADE, related_name='stores')
    city = models.ForeignKey(City, on_delete=models.CASCADE, related_name='stores')
    pincode = models.CharField(max_length=6)
    phone_number = models.CharField(max_length=10, validators=[REGEX_PHONE], null=True, blank=True)
    email = models.EmailField(max_length=255, null=True, blank=True)
    coordinate = models.CharField(max_length=400, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    full_address = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name_plural = 'Stores'

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.landmark:
            self.full_address = f"""
{self.name}, {self.address_line1}, {self.address_line2}
{self.area}, {self.state.name}, {self.city.name},
{self.pincode}"""
        else:
            self.full_address = f"""
{self.name}, {self.address_line1}, {self.address_line2},
{self.landmark}, {self.area}, {self.state.name}, 
{self.city.name}, {self.pincode}"""

        if self.email:
            validate_email(self.email)
        super(Store, self).save(*args, **kwargs)
