from rest_framework import viewsets
from .models import Event
from .serializers import EventSerializer
from django.contrib.auth.models import User
from rest_framework import permissions, viewsets
from emp_app.serializers import UserSerializer
from rest_framework.decorators import api_view

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]
