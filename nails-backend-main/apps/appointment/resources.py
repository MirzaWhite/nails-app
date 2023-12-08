from import_export import resources
from import_export.fields import Field
from import_export.widgets import ManyToManyWidget

from apps.appointment.models import BookAppointment
from apps.product.models import Service


class BookAppointmentResource(resources.ModelResource):
    """
    Resource Class for Model BookAppointment
    """

    def get_export_headers(self):
        super().get_export_headers()
        new_headers = ['id', 'Submitted At', 'Name', 'Email', 'Contact Number', 'Booking Date',
                       'Booking Timeslot', 'Store', 'Product', 'Services', 'Booking Type']
        return new_headers

    # For export the ManyToManyField relation field
    services = Field(
        column_name='service',
        attribute='service',
        widget=ManyToManyWidget(model=Service, separator=',', field='name')
    )

    class Meta:
        model = BookAppointment
        fields = (
            'id', 'created_at', 'name', 'email', 'phone_number', 'date', 'time__time',
            'store__name',
            'product__name', 'services', 'booking_type')
        export_order = (
            'id', 'created_at', 'name', 'email', 'phone_number', 'date', 'time__time',
            'store__name',
            'product__name', 'services', 'booking_type')
