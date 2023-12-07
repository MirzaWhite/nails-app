from django.db import models

from apps.core.models import TimestampModel
from django_editorjs_fields import EditorJsJSONField

FAQ_TYPE_CHOICES = (
    ('NORMAL', 'NORMAL'),
    ('FRANCHISE', 'FRANCHISE'),
)


class FAQSection(TimestampModel):
    question = models.CharField(max_length=75)
    answer = EditorJsJSONField()
    faq_type = models.CharField(max_length=10, choices=FAQ_TYPE_CHOICES)
    is_active = models.BooleanField(default=True)
    sort_order = models.PositiveSmallIntegerField(default=0)

    class Meta:
        verbose_name_plural = 'FAQ\'s'
        ordering = ('sort_order',)

    def __str__(self):
        return str(self.id)
