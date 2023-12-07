import graphene
from graphene_django import DjangoObjectType
from apps.product.models import Service, Product, Category, Brand, ProductGallery


class ServiceType(DjangoObjectType):
    mobile_image = graphene.String()
    desktop_image = graphene.String()

    class Meta:
        model = Service
        exclude = ('is_active', 'created_at', 'updated_at')
        interfaces = (graphene.relay.Node,)
        filter_fields = ('is_featured', 'is_active')

    def resolve_mobile_image(self, info):
        return info.context.build_absolute_uri(self.mobile_image.url) if self.mobile_image else None

    def resolve_desktop_image(self, info):
        return info.context.build_absolute_uri(self.desktop_image.url) if self.desktop_image else None


class CategoryType(DjangoObjectType):
    mobile_image = graphene.String()
    desktop_image = graphene.String()

    class Meta:
        model = Category
        exclude = ('created_at', 'updated_at', 'is_active')
        interfaces = (graphene.relay.Node,)

    def resolve_mobile_image(self, info):
        return info.context.build_absolute_uri(self.mobile_image.url) if self.mobile_image else None

    def resolve_desktop_image(self, info):
        return info.context.build_absolute_uri(self.desktop_image.url) if self.desktop_image else None


class BrandType(DjangoObjectType):
    class Meta:
        model = Brand
        exclude = ('created_at', 'updated_at', 'is_active')
        interfaces = (graphene.relay.Node,)


class ProductGalleryType(DjangoObjectType):
    mobile_image = graphene.String()
    desktop_image = graphene.String()

    class Meta:
        model = ProductGallery
        exclude = ('created_at', 'updated_at')
        interfaces = (graphene.relay.Node,)

    def resolve_mobile_image(self, info):
        return info.context.build_absolute_uri(self.mobile_image.url) if self.mobile_image else None

    def resolve_desktop_image(self, info):
        return info.context.build_absolute_uri(self.desktop_image.url) if self.desktop_image else None


class ProductType(DjangoObjectType):
    gallery = graphene.List(ProductGalleryType)

    class Meta:
        model = Product
        exclude = ('is_active', 'created_at', 'updated_at', 'keywords')
        interfaces = (graphene.relay.Node,)
        filter_fields = {
            'name': ('exact', 'istartswith', 'icontains'),
            'keywords': ('exact', 'istartswith', 'icontains'),
            'is_active': ('exact',),
            'is_featured': ('exact',),
            'is_best_selling_product': ('exact',),
        }

    def resolve_gallery(self, info):
        return ProductGallery.objects.filter(product=self)


class ProductWithPaginationType(graphene.ObjectType):
    total_count = graphene.Int()
    page_range = graphene.List(graphene.Int)
    product_data = graphene.List(ProductType)
    service_filter_data = graphene.List(ServiceType)
    category_filter_data = graphene.List(CategoryType)
    brand_filter_data = graphene.List(BrandType)
