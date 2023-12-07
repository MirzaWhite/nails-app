import graphene
from graphene_django.filter import DjangoFilterConnectionField
from django.core.paginator import Paginator
from graphql import GraphQLError
from graphql_relay import from_global_id

from graph_api.product.types import ServiceType, CategoryType, BrandType, ProductWithPaginationType, ProductType
from apps.product.models import Product, Category, Brand, Service
from graph_api.product.utils import convert_global_id_list_to_django_id_list


class ProductQuery(graphene.ObjectType):
    search_products = DjangoFilterConnectionField(ProductType)
    services = DjangoFilterConnectionField(ServiceType, description='Active services')
    categories = graphene.List(CategoryType, description='Active categories')
    brands = graphene.List(BrandType, description='Active brands')
    products = graphene.Field(ProductWithPaginationType,
                              # Pagination's
                              end=graphene.Int(default_value=1),
                              pagination_value=graphene.Int(default_value=10),

                              # Filters
                              brand_ids=graphene.List(graphene.String),
                              category_ids=graphene.List(graphene.String),
                              service_ids=graphene.List(graphene.String),

                              # Description
                              description=('List products with pagination that has filter '
                                           'by services, categories, brands with')
                              )
    product_by_id = graphene.Field(ProductType,
                                   product_id=graphene.ID(required=True),
                                   description='Individual product api'
                                   )

    def resolve_product_by_id(self, info, product_id):
        try:
            product_id = from_global_id(product_id)[1]
            product = Product.objects.get(id=product_id)
        except Product.DoesNotExist:
            raise GraphQLError('Product does not exist!')
        except ValueError:
            raise GraphQLError('Invalid product id!')
        return product

    def resolve_categories(self, info):
        return Category.objects.filter(is_active=True)

    def resolve_brands(self, info):
        return Brand.objects.filter(is_active=True)

    def resolve_products(self, info, end=1, pagination_value=10, **kwargs):

        product_filter_ops = {'is_active': True}
        if service_ids := kwargs.get('service_ids'):
            service_ids = convert_global_id_list_to_django_id_list(service_ids)
            product_filter_ops['service_id__in'] = service_ids
        if category_ids := kwargs.get('category_ids'):
            category_ids = convert_global_id_list_to_django_id_list(category_ids)
            product_filter_ops['category_id__in'] = category_ids
        if brand_ids := kwargs.get('brand_ids'):
            brand_ids = convert_global_id_list_to_django_id_list(brand_ids)
            product_filter_ops['brand_id__in'] = brand_ids

        products = Product.objects.filter(**product_filter_ops)
        active_services = Service.objects.filter(is_active=True)
        active_categories = Category.objects.filter(is_active=True, products__in=products).distinct()
        active_brands = Brand.objects.filter(is_active=True, products__in=products).distinct()

        if not pagination_value:
            pagination_value = 10
        if not end:
            end = 1

        p = Paginator(products, int(pagination_value))
        products_paginated = p.page(int(end))
        data = {
            'total_count': products.count(),
            'page_range': p.page_range,
            'product_data': products_paginated,
            'service_filter_data': active_services,
            'category_filter_data': active_categories,
            'brand_filter_data': active_brands,
        }

        return data
