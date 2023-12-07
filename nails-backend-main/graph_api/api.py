import graphene

from graph_api.appointment.mutations import AppointmentMutation
from graph_api.appointment.schema import AppointmentQuery
from graph_api.contact.mutations import ContactMutation
from graph_api.faq.schema import FAQSectionQuery
from graph_api.gallery.schema import GalleryQuery
from graph_api.home.schema import HomeQuery
from graph_api.product.schema import ProductQuery
from graph_api.store.schema import StoreQuery
from graph_api.testimonials.schema import TestimonialQuery
from graph_api.blogs.schema import BlogsQuery


class Query(TestimonialQuery,
            GalleryQuery,
            HomeQuery,
            ProductQuery,
            AppointmentQuery,
            StoreQuery,
            FAQSectionQuery,
            BlogsQuery,
            graphene.ObjectType):
    pass


class Mutation(ContactMutation,
               AppointmentMutation,
               graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
