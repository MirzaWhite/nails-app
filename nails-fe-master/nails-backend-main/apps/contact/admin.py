from django.contrib import admin
from apps.contact.models import ContactUs, Subscribe
from import_export import resources
from import_export.admin import ExportMixin


class ContactUsResource(resources.ModelResource):
    class Meta:
        model = ContactUs


class SubscribeResource(resources.ModelResource):
    class Meta:
        model = Subscribe


class ContactUsAdmin(ExportMixin, admin.ModelAdmin):
    resource_class = ContactUsResource
    list_display = ('name', 'phone_number', 'form_type')
    list_filter = ('form_type',)


class SubscribeAdmin(ExportMixin, admin.ModelAdmin):
    resource_class = SubscribeResource


admin.site.register(ContactUs, ContactUsAdmin)
admin.site.register(Subscribe, SubscribeAdmin)
