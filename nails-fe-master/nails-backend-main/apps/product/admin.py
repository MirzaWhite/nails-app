from django.contrib import admin
from import_export.admin import ImportExportMixin
from import_export import resources
from apps.product.models import Brand, Service, Category, Product, ProductGallery


class ProductResource(resources.ModelResource):
    class Meta:
        model = Product
        import_id_fields = ('id', 'created_at')


class ProductGalleryInline(admin.StackedInline):
    model = ProductGallery


class BrandAdmin(admin.ModelAdmin):
    list_filter = ('is_active', 'is_featured')
    list_display = ('name', 'is_active', 'is_featured')
    list_editable = ('is_active', 'is_featured')


class ServiceAdmin(admin.ModelAdmin):
    list_display = ('name', 'is_active', 'is_featured')
    list_editable = ('is_active', 'is_featured')
    list_filter = ('is_active', 'is_featured')


class CategoryAdmin(admin.ModelAdmin):
    list_filter = ('is_active', 'is_featured')
    list_display = ('name', 'is_active', 'is_featured')
    list_editable = ('is_active', 'is_featured')


class ProductAdmin(ImportExportMixin, admin.ModelAdmin):
    resource_class = ProductResource
    list_filter = ('is_active', 'is_featured')
    list_display = ('name', 'sku', 'service', 'category', 'brand', 'is_active', 'is_featured')
    list_editable = ('service', 'category', 'brand', 'is_active', 'is_featured')
    inlines = [
        ProductGalleryInline,
    ]


class ProductGalleryAdmin(admin.ModelAdmin):
    list_display = ('get_product_name', 'sort_order')
    list_filter = ('product__name',)
    list_editable = ('sort_order',)

    def get_product_name(self, obj):
        return obj.product.name


admin.site.register(Brand, BrandAdmin)
admin.site.register(Service, ServiceAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(ProductGallery, ProductGalleryAdmin)
