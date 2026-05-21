from rest_framework.views import APIView

from rest_framework.response import Response

from rest_framework.permissions import (
    IsAuthenticated,
    AllowAny,
)

from rest_framework.generics import (
    CreateAPIView,
)

from .serializers import (
    UserSerializer,
    RegisterSerializer,
)


class UserProfileView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        serializer = UserSerializer(
                request.user
            )

        return Response(
            serializer.data
        )


class RegisterView(CreateAPIView):

    serializer_class = RegisterSerializer

    permission_classes = [
        AllowAny
    ]