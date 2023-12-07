from django.db import models

from apps.core.models import TimestampModel
from versatileimagefield.fields import VersatileImageField, PPOIField
from mptt.models import MPTTModel, TreeForeignKey


class Brand(TimestampModel):
    name = models.CharField(max_length=100)
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = 'Brands'

    def __str__(self):
        return self.name


class Service(TimestampModel):
    name = models.CharField(max_length=100)
    mobile_image = VersatileImageField(upload_to='service/mobile_images')
    desktop_image = VersatileImageField(upload_to='service/desktop_images')
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    ppoi = PPOIField()

    class Meta:
        verbose_name_plural = 'Services'

    def __str__(self):
        return self.name


class Category(TimestampModel, MPTTModel):
    name = models.CharField(max_length=100)
    mobile_image = VersatileImageField(upload_to='categories/mobile_images')
    desktop_image = VersatileImageField(upload_to='categories/desktop_images')
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    ppoi = PPOIField()
    parent = TreeForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='children')

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name


class Product(TimestampModel):
    name = models.CharField(max_length=100)
    sku = models.CharField(max_length=10, unique=True)
    short_description = models.CharField(max_length=30)
    long_description = models.TextField()
    duration = models.CharField(max_length=10)
    service = models.ForeignKey(Service, on_delete=models.CASCADE, related_name='products')
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, related_name='products')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    keywords = models.TextField()
    is_featured = models.BooleanField(default=False)
    is_best_selling_product = models.BooleanField(default=False, help_text="Used to identify best-selling products, (best seller section).")
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = 'Products'

    def __str__(self):
        return self.name


class ProductGallery(TimestampModel):
    product = models.ForeignKey(Product, models.CASCADE, related_name='product_galleries')
    mobile_image = VersatileImageField(upload_to='product_gallery/mobile_image')
    desktop_image = VersatileImageField(upload_to='product_gallery/desktop_image')
    is_featured = models.BooleanField(default=False)
    sort_order = models.PositiveSmallIntegerField(default=0)

    class Meta:
        verbose_name_plural = 'Product Galleries'

    def __str__(self):
        return self.product.name
