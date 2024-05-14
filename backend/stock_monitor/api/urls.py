from django.urls import path
from .views import WatchlistView

urlpatterns = [
    # path('register/', RegisterView.as_view(), name='register'),
    path('watchlist/', WatchlistView.as_view(), name='watchlist'),
    # path('stock/<str:symbol>/', StockDataView.as_view(), name='stock-data'),
]
