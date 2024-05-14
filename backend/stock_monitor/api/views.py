# api/views.py

from rest_framework import generics, permissions
from .models import Watchlist
from .serializers import WatchlistSerializer  # Ensure correct import

class WatchlistView(generics.ListCreateAPIView):
    serializer_class = WatchlistSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Watchlist.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
