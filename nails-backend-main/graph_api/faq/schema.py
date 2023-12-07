import graphene

from apps.faq.models import FAQSection
from graph_api.faq.enum import FAQSectionTypeEnum
from graph_api.faq.types import FAQSectionType


class FAQSectionQuery(graphene.ObjectType):
    faq_sections = graphene.List(FAQSectionType,
                                 faq_type=FAQSectionTypeEnum(required=True))

    def resolve_faq_sections(self, info, faq_type):
        return FAQSection.objects.filter(is_active=True, faq_type=faq_type)
