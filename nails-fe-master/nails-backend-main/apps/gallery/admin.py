from django.contrib import admin
from apps.gallery.models import Gallery, GalleryMedia


class GalleryMediaInline(admin.StackedInline):
    model = GalleryMedia


class GalleryAdmin(admin.ModelAdmin):
    list_display = ('name', 'gallery_type')
    list_filter = ('gallery_type',)
    inlines = [
        GalleryMediaInline,
    ]


class GalleryMediaAdmin(admin.ModelAdmin):
    list_display = ('gallery', 'get_gallery_type', 'is_active', 'sort_order')
    list_editable = ('is_active', 'sort_order',)

    def get_gallery_type(self, obj):
        return obj.gallery.gallery_type


admin.site.register(Gallery, GalleryAdmin)
admin.site.register(GalleryMedia, GalleryMediaAdmin)
