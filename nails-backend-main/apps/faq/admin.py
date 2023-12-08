from django.contrib import admin

from apps.faq.models import FAQSection


class FAQSectionAdmin(admin.ModelAdmin):
    list_display = ('id', 'question', 'faq_type', 'sort_order', 'is_active')
    list_filter = ('faq_type', 'is_active',)
    list_editable = ('sort_order', 'is_active',)


admin.site.register(FAQSection, FAQSectionAdmin)
