import graphene

from apps.testimonial.models import Testimonial
from graph_api.testimonials.enum import TestimonialTypeEnum
from graph_api.testimonials.types import TestimonialType


class TestimonialQuery(graphene.ObjectType):
    testimonials = graphene.List(TestimonialType,
                                 testimonial_type=TestimonialTypeEnum(required=True),
                                 description='Lists Testimonials based on types',
                                 )

    def resolve_testimonials(self, info, testimonial_type):
        return Testimonial.objects.filter(is_active=True, testimonial_type=testimonial_type[0])
