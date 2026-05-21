from django.urls import path

from .views import (
    UserProfileView,
    RegisterView,
)

urlpatterns = [

    path(
        "users/profile/",
        UserProfileView.as_view(),
        name="profile"
    ),

    path(
        "users/register/",
        RegisterView.as_view(),
        name="register"
    ),
]