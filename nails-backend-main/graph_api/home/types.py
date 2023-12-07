import graphene
from graphene_django import DjangoObjectType

from apps.home.models import HomeSlider, State, City


class HomeSliderType(DjangoObjectType):
    mobile_image = graphene.String()
    desktop_image = graphene.String()
    hosted_url_mobile = graphene.String()
    hosted_url_desktop = graphene.String()
    thumbnail_mobile = graphene.String()
    thumbnail_desktop = graphene.String()

    class Meta:
        model = HomeSlider
        exclude = ('created_at', 'updated_at', 'is_active')
        interfaces = (graphene.relay.Node,)

    def resolve_mobile_image(self, info):
        return info.context.build_absolute_uri(self.mobile_image.url) if self.mobile_image else None

    def resolve_desktop_image(self, info):
        return info.context.build_absolute_uri(self.desktop_image.url) if self.desktop_image else None

    def resolve_hosted_url_mobile(self, info):
        return info.context.build_absolute_uri(self.hosted_url_mobile.url) if self.hosted_url_mobile else None

    def resolve_hosted_url_desktop(self, info):
        return info.context.build_absolute_uri(self.hosted_url_desktop.url) if self.hosted_url_desktop else None

    def resolve_thumbnail_mobile(self, info):
        return info.context.build_absolute_uri(self.thumbnail_mobile.url) if self.thumbnail_mobile else None

    def resolve_thumbnail_desktop(self, info):
        return info.context.build_absolute_uri(self.thumbnail_desktop.url) if self.thumbnail_desktop else None


class StateType(DjangoObjectType):
    class Meta:
        model = State
        exclude = ('created_at', 'updated_at')
        interfaces = (graphene.relay.Node,)


class CityType(DjangoObjectType):
    class Meta:
        model = City
        exclude = ('created_at', 'updated_at')
        interfaces = (graphene.relay.Node,)
