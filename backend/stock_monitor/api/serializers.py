# api/serializers.py

from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Watchlist

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class WatchlistSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Watchlist
        fields = ['id', 'user', 'symbol', 'created_at']
