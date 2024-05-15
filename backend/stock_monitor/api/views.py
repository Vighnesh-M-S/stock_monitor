from django.http import HttpResponse
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .models import Watchlist
from .serializers import WatchlistSerializer, UserSerializer
from django.contrib.auth.models import User

class WatchlistView(generics.ListCreateAPIView):
    queryset = Watchlist.objects.all()
    serializer_class = WatchlistSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Watchlist.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

class StockDetailView(generics.RetrieveAPIView):
    def get(self, request, *args, **kwargs):
        symbol = self.kwargs['symbol']
        return Response({"symbol": symbol, "price": "123.45"})

def index(request):
    return HttpResponse("Welcome to the Stock Monitoring Platform API")
