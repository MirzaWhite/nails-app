from django.contrib import admin
from apps.store.models import Store
from import_export import resources
from import_export.admin import ImportExportMixin


class StoreResource(resources.ModelResource):
    class Meta:
        model = Store
        import_id_fields = ('id', 'created_at')


class StoreAdmin(ImportExportMixin, admin.ModelAdmin):
    resource_class = StoreResource
    list_display = ('id', 'name', 'state', 'city', 'pincode', 'is_active')
    list_filter = ('is_active', 'state__name', 'city__name')
    readonly_fields = ('full_address',)


admin.site.register(Store, StoreAdmin)
