import math
import readtime
from django.core.exceptions import ValidationError
from django.db import models
from versatileimagefield.fields import VersatileImageField
from django_editorjs_fields import EditorJsJSONField
from apps.core.models import TimestampModel
from django.contrib.postgres.fields import ArrayField
from django.template.defaultfilters import slugify

class Blog(TimestampModel):
    title = models.CharField(max_length=150, help_text="The Blog Title")
    title_slug = models.SlugField(max_length=100, help_text="The URL slug")
    meta_title = models.CharField(max_length=150, blank=True, null=True, help_text="Blog's Meta Title")
    meta_description = models.CharField(max_length=150, blank=True, null=True, help_text="Blog's Meta Description")
    short_description = models.CharField(max_length=150, blank=True, null=True, help_text="Blog's Short Description")
    body = EditorJsJSONField(
        null=True,
        blank=True
    )
    featured_image_mobile = VersatileImageField("Thumbnail Image Mobile", help_text="Background image for mobile")
    featured_image_desktop = VersatileImageField("Thumbnail Image Desktop", help_text="Background image for desktop")
    main_image_mobile = VersatileImageField("Main Image Mobile", blank=True, null=True, help_text="Main image for mobile")
    main_image_desktop = VersatileImageField("Main Image Desktop", blank=True, null=True, help_text="Main image for desktop")
    published_at = models.DateField(auto_now_add=True, help_text="Published Date")
    read_time = models.PositiveIntegerField(default=0, help_text="The Blog read time automatically calculated after save")
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    sort_order = models.PositiveIntegerField(help_text="List the Blogs based on sort order")
    tags = ArrayField(models.CharField(max_length=100), blank=True, null=True, help_text="Tags for the blog", default=list)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ("sort_order",)
        unique_together = ('is_featured', 'sort_order')

    def clean(self):
        # validate Image Upload
        if self.featured_image_mobile and not self.featured_image_desktop:
            raise ValidationError("Please provide featured desktop image")
        if self.featured_image_desktop and not self.featured_image_mobile:
            raise ValidationError("Please provide featured mobile image")
        # validate sort order for active blogs
        if not self.is_featured:
            if Blog.objects.filter(sort_order=self.sort_order, is_featured=False).exclude(id=self.id).exists():
                raise ValidationError("Sort Order already exists!")

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None, *args, **kwargs):
        # to calculate the blog read time
        if self.body:
            readtime_min = readtime.of_text(str(self.body), wpm=80)
            self.read_time = round(math.ceil(readtime_min.seconds / 60))
        if self.title_slug:
            self.title_slug = slugify(self.title)
        super(Blog, self).save()