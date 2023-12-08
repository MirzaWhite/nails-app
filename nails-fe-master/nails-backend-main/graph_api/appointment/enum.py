import graphene


class BookingTypeEnum(graphene.Enum):
    PRODUCT = 'PRODUCT'
    SERVICE = 'SERVICE'
