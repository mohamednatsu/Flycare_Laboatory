from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    # path('/', views.home, name='home'),
    path('research/', views.research , name='research'),
    # path('lab/', views.fly , name='lab'),
    # path('report/', views.report , name='lab'),
    path('features/', views.Features , name='features'),
    path('about/', views.About , name='AboutUs'),
    path('contact/', views.Contact , name='ContactUs'),
    path('services/', views.services , name='Services'),
    path('delete/<int:id>/', views.delete , name='delete'),
    path('add/', views.lab , name='add'),
    path('list/', views.list , name='list'),
    path('addpc/', views.addpc , name='addpc'),
    path('listpc/', views.listpc , name='listpc'),
    path('report/', views.report, name='report'),
    path('search/', views.search , name='search'),
    path('delete/<int:id>', views.delete , name='delete'),
]