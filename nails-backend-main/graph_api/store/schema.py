import graphene
from graphene_django.filter import DjangoFilterConnectionField

from graph_api.store.types import StoreType


class StoreQuery(graphene.ObjectType):
    stores = DjangoFilterConnectionField(StoreType)
