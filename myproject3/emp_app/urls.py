from django.urls import path, include
from rest_framework import routers
from .views import EventViewSet
from django.urls import path, include
from rest_framework import routers
from .views import EventViewSet, UserViewSet
from rest_framework.authtoken.views import obtain_auth_token
router = routers.DefaultRouter()
router.register(r'events', EventViewSet)
router.register(r'users', UserViewSet)
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
]
