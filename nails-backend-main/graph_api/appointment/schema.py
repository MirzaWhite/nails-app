import graphene

from apps.appointment.models import Slot
from graph_api.appointment.types import SlotType


class AppointmentQuery(graphene.ObjectType):
    available_slots = graphene.List(SlotType)

    def resolve_available_slots(self, info):
        return Slot.objects.filter(is_active=True)
