from django.urls import path
from .views import RegisterView

from .views import UserProfileView


urlpatterns = [

    path( "profile/", UserProfileView.as_view(), name="profile" ),
    path( "users/register/", RegisterView.as_view(), name="register"),
]