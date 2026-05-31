from django.urls import path
from .views import RegisterView
from .views import ProfileView, TestUsersView

urlpatterns = [

    path(
        'register/',
        RegisterView.as_view(),
        name='register'
    ),

    path(
        'profile/',
         ProfileView.as_view(),
         name='profile'
    ),
    
    path("test-users/", TestUsersView.as_view())

]