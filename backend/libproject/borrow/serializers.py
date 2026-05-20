from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from .models import Borrow


class BorrowSerializer(ModelSerializer):

    book_title = serializers.CharField(
        source="book.title",
        read_only=True
    )

    class Meta:

        model = Borrow

        fields = "__all__"

        read_only_fields = ["user"]