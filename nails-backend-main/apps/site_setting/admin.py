from django.contrib import admin

from apps.site_setting.models import EmailSetting


@admin.register(EmailSetting)
class EmailSettingAdmin(admin.ModelAdmin):
    list_display = ('from_email', 'subject', 'sending_type')
    search_fields = ('from_email', 'subject')
    list_filter = ('from_email', 'subject')
