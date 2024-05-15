from django.urls import path
from . import views

urlpatterns = [
    path('watchlist/', views.WatchlistView.as_view(), name='watchlist'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('token/', views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', views.TokenRefreshView.as_view(), name='token_refresh'),
    path('stock/<str:symbol>/', views.StockDetailView.as_view(), name='stock_detail'),
]
