from django.contrib import admin

from apps.testimonial.models import Testimonial


class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'testimonial_type', 'is_active', 'sort_order')
    list_editable = ('is_active', 'sort_order')
    list_filter = ('is_active',)


admin.site.register(Testimonial, TestimonialAdmin)
