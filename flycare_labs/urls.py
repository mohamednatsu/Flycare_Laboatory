
from django.contrib import admin
from django.urls import include , path

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include('Labfly.urls')),
    path('home/', include('Labfly.urls')),
    path('Laboratory/', include('Labfly.urls')),
]
