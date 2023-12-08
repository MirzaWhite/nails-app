from django.db import models

from apps.core.models import TimestampModel, VIDEO_PROVIDER_CHOICES
from versatileimagefield.fields import VersatileImageField
from django.core.validators import ValidationError

GALLERY_CHOICES = (
    ('ABOUT_US', 'ABOUT_US'),
    ('CELEBRITY', 'CELEBRITY'),
    ('CLIENT', 'CLIENT'),
)


class Gallery(TimestampModel):
    name = models.CharField(max_length=100)
    description = models.TextField()
    gallery_type = models.CharField(max_length=30, choices=GALLERY_CHOICES)

    class Meta:
        verbose_name_plural = 'Gallery'

    def __str__(self):
        return self.name


class GalleryMedia(TimestampModel):
    gallery = models.ForeignKey(Gallery, on_delete=models.CASCADE, related_name='gallery_medias')
    mobile_image = VersatileImageField(upload_to='gallery_media/mobile_image', null=True, blank=True)
    desktop_image = VersatileImageField(upload_to='gallery_media/desktop_image', null=True, blank=True)
    hosted_url_mobile = models.FileField(upload_to='gallery_media/mobile_video', null=True, blank=True)
    hosted_url_desktop = models.FileField(upload_to='gallery_media/desktop_video', null=True, blank=True)
    provider = models.CharField(max_length=40, choices=VIDEO_PROVIDER_CHOICES, null=True, blank=True)
    provider_url = models.URLField(null=True, blank=True)
    thumbnail_mobile = VersatileImageField(upload_to='gallery_media/thumbnail_mobile', null=True, blank=True)
    thumbnail_desktop = VersatileImageField(upload_to='gallery_media/thumbnail_desktop', null=True, blank=True)
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.CharField(max_length=200, null=True, blank=True)
    sort_order = models.PositiveSmallIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = 'Gallery Media'
        ordering = ('sort_order',)

    def __str__(self):
        return self.gallery.name

    def clean(self):
        if self.mobile_image and not self.desktop_image or self.desktop_image and not self.mobile_image:
            raise ValidationError('Must provide both mobile and desktop image')
        if self.mobile_image and self.desktop_image:
            if self.hosted_url_mobile or self.hosted_url_desktop or self.provider_url or self.provider or self.thumbnail_desktop or self.thumbnail_mobile:
                raise ValidationError('You can provide either image or video')
        else:
            if self.hosted_url_mobile and not self.hosted_url_desktop or self.hosted_url_desktop and not self.hosted_url_mobile:
                raise ValidationError('Provide both hosted url for mobile and desktop')
            if self.provider and not self.provider_url or self.provider_url and not self.provider:
                raise ValidationError('Must provide both provider and provider url')
            if self.provider and self.provider_url:
                if not self.thumbnail_mobile or not self.thumbnail_desktop:
                    raise ValidationError('Must provide thumbnail mobile and thumbnail desktop.')
            if self.hosted_url_mobile and self.hosted_url_desktop:
                if not self.thumbnail_mobile or not self.thumbnail_desktop:
                    raise ValidationError('Must provide thumbnail mobile and thumbnail desktop.')
