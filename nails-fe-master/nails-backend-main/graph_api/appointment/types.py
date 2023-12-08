import graphene
from graphene_django import DjangoObjectType

from apps.appointment.models import Slot, BookAppointment


class SlotType(DjangoObjectType):
    class Meta:
        model = Slot
        exclude = ('created_at', 'updated_at', 'is_active')
        interfaces = (graphene.relay.Node,)


class BookAppointmentType(DjangoObjectType):
    class Meta:
        model = BookAppointment
        exclude = ('created_at', 'updated_at')
        interfaces = (graphene.relay.Node,)