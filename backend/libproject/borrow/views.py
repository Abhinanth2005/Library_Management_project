from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated

from .models import Borrow
from .serializers import BorrowSerializer


class BorrowViewSet(ModelViewSet):

    serializer_class = BorrowSerializer

    permission_classes = [IsAuthenticated]

    def get_queryset(self):

        return Borrow.objects.filter(
            user=self.request.user
        )

    def perform_create(self, serializer):

        serializer.save(user=self.request.user)