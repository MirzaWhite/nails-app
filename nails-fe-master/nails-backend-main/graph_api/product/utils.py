
from typing import List

from graphql_relay import from_global_id


def convert_global_id_list_to_django_id_list(global_id_list: List) -> list:
    return [from_global_id(global_id)[1] for global_id in global_id_list]