import graphene.relay
from graphene_django import DjangoObjectType

from apps.faq.models import FAQSection


class FAQSectionType(DjangoObjectType):
    class Meta:
        model = FAQSection
        exclude = ('created_at', 'updated_at', 'is_active')
        interfaces = (graphene.relay.Node,)
