from django.contrib import admin
from django.urls import path, include
from api.views import index  # Import the index view

urlpatterns = [
    path('admin/', admin.site.urls),  # Admin interface
    path('api/', include('api.urls')),  # Include URLs from the api app
    path('api-auth/', include('rest_framework.urls')),  # DRF's login and logout views
    path('', index),  # Add a pattern for the root URL
]
