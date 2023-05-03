from django.db import models
from django.contrib.auth.models import User

class Event(models.Model):
    event_name = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    location = models.CharField(max_length=100)
    image = models.ImageField(upload_to='event_images/')
    is_liked = models.BooleanField(default=False)
    owner = models.ForeignKey(User, on_delete=models.CASCADE,null=True)
