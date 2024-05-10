from rest_framework import serializers
from .models import RandomUser

class RandomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = RandomUser
        fields = '__all__'
