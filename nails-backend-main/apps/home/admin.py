from django.contrib import admin
from apps.home.models import HomeSlider, State, City


class CityInline(admin.StackedInline):
    model = City


class HomeSliderAdmin(admin.ModelAdmin):
    list_display = ('id', 'is_active', 'sort_order')
    list_editable = ('is_active', 'sort_order',)


class CityAdmin(admin.ModelAdmin):
    list_display = ('name', 'state')
    list_filter = ('state',)


class StateAdmin(admin.ModelAdmin):
    inlines = [
        CityInline,
    ]


admin.site.register(HomeSlider, HomeSliderAdmin)
admin.site.register(State, StateAdmin)
admin.site.register(City, CityAdmin)
