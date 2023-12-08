import graphene
from graphene_django import DjangoObjectType

from apps.testimonial.models import Testimonial


class TestimonialType(DjangoObjectType):
    mobile_image = graphene.String()
    desktop_image = graphene.String()

    class Meta:
        model = Testimonial
        exclude = ('created_at', 'updated_at', 'is_active')
        interfaces = (graphene.relay.Node,)

    def resolve_mobile_image(self, info):
        return info.context.build_absolute_uri(self.mobile_image.url) if self.mobile_image else None

    def resolve_desktop_image(self, info):
        return info.context.build_absolute_uri(self.desktop_image.url) if self.desktop_image else None
