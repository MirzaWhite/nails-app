import graphene
from graphql_relay import from_global_id
from graphql import GraphQLError

from apps.home.models import HomeSlider, State, City
from graph_api.home.types import HomeSliderType, StateType, CityType


class HomeQuery(graphene.ObjectType):
    home_slider = graphene.List(HomeSliderType, description='Homepage Sliders')
    states = graphene.List(StateType, description='List all states')
    cities_by_state = graphene.List(CityType, state_id=graphene.ID(required=True),
                                    description='List all cities by states')

    def resolve_home_slider(self, info):
        return HomeSlider.objects.filter(is_active=True)

    def resolve_states(self, info):
        return State.objects.all()

    def resolve_cities_by_state(self, info, state_id):
        try:
            state_id = from_global_id(state_id)[1]
            state = State.objects.get(id=state_id)
        except ValueError:
            raise GraphQLError('invalid state id')
        except State.DoesNotExist:
            raise GraphQLError('state does not exist')
        return City.objects.filter(state=state)
