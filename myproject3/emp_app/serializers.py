from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Event

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'event_name', 'date', 'time', 'location', 'image', 'is_liked', 'owner')
        read_only_fields = ('id', 'is_liked', 'owner')
