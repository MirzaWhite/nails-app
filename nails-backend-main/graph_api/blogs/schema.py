import graphene
from graphene_django_pagination import DjangoPaginationConnectionField
from apps.blog.models import Blog
from graph_api.blogs.type import BlogType
from django.db.models import Q
import itertools

class BlogsQuery(graphene.ObjectType):
    get_blogs = DjangoPaginationConnectionField(
        BlogType,
        search=graphene.String(),
        description="Returns a list of Available Blogs"
    )
    get_blog = graphene.Field(BlogType, slug=graphene.String(required=True))

    def resolve_get_blogs(self, root, search=None, offset=None, limit=None, **kwargs):
        """
        return: Returns all Active Blogs
        """
        all_blogs = Blog.objects.filter(is_active=True)
        if search:
            filter = (
                Q(title__icontains=search) | Q(title__iexact=search) | Q(title__istartswith=search) |
                Q(tags__icontains=search) | Q(tags__iexact=search) | Q(tags__istartswith=search)
            )
            return all_blogs.filter(filter)
        else:
            return all_blogs
    
    def resolve_get_blog(self, root, **kwargs):
        """
        return: Returns the Active Blog by Slug
        """
        slug = kwargs.get('slug')
        try:
            return Blog.objects.filter(title_slug=slug, is_active=True).first()
        except:
            return None