import graphene


class GalleryTypeEnum(graphene.Enum):
    PORTFOLIO = 'PORTFOLIO'
    CELEBRITY = 'CELEBRITY'
    CLIENT = 'CLIENT'
