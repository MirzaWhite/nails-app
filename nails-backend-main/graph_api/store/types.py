import graphene.relay
from graphene_django import DjangoObjectType
from apps.store.models import Store


class StoreType(DjangoObjectType):
    class Meta:
        model = Store
        exclude = ('created_at', 'updated_at', 'is_active')
        interfaces = (graphene.relay.Node,)
        filter_fields = {
            'full_address': ('exact', 'istartswith', 'icontains'),
            'name': ('exact', 'startswith', 'contains'),
            'address_line1': ('exact', 'startswith', 'contains'),
            'address_line2': ('exact', 'startswith', 'contains'),
            'landmark': ('exact', 'startswith', 'contains'),
            'area': ('exact', 'startswith', 'contains'),
            'pincode': ('exact', 'startswith', 'contains'),
            'state__name': ('exact', 'startswith', 'contains'),
            'city__name': ('exact', 'startswith', 'contains'),
            'is_active': ('exact',),

        }
