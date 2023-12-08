from django.contrib import admin
from import_export.admin import ExportMixin

from apps.appointment.models import BookAppointment, Slot
from apps.appointment.resources import BookAppointmentResource


class SlotAdmin(admin.ModelAdmin):
    list_display = ('time', 'is_active')
    list_filter = ('is_active',)
    list_editable = ('is_active',)


admin.site.register(Slot, SlotAdmin)



@admin.register(BookAppointment)
class BookAppointmentAdmin(ExportMixin, admin.ModelAdmin):
    """
    Custom DjangoAdmin for BookAppointment Model
    """
    resource_class = BookAppointmentResource
    list_filter = ("booking_type",)
    list_display = ("id", "name", 'store', 'date', 'time', 'product', 'services', 'booking_type')
    filter_horizontal = ('service',)
    search_fields = ("id", "name", "email", "phone_number")
    ordering = ("-id",)
    # date-hierarchy
    date_hierarchy = 'created_at'
    date_hierarchy_drilldown = False

    def services(self, obj):
        return ", ".join([service.name for service in obj.service.all()])
