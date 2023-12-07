import graphene

from apps.gallery.models import Gallery
from graph_api.gallery.enum import GalleryTypeEnum
from graph_api.gallery.types import GalleryType


class GalleryQuery(graphene.ObjectType):
    galleries = graphene.List(GalleryType,
                              gallery_type=GalleryTypeEnum(required=True),
                              description='Gallery listing based on types.'
                              )

    def resolve_galleries(self, info, gallery_type):
        return Gallery.objects.filter(gallery_type=gallery_type)
