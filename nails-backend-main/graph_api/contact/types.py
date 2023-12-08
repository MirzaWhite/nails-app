import graphene.relay
from graphene_django import DjangoObjectType
from apps.contact.models import ContactUs


class ContactType(DjangoObjectType):
    class Meta:
        model = ContactUs
        exclude = ('created_at', 'updated_at')
        interfaces = (graphene.relay.Node,)
