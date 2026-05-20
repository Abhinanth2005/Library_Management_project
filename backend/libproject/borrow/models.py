from django.db import models

from books.models import Book
from users.models import CustomUser


class Borrow(models.Model):

    user = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE
    )

    book = models.ForeignKey(
        Book,
        on_delete=models.CASCADE
    )

    borrowed_at = models.DateTimeField(
        auto_now_add=True
    )

    returned = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username} - {self.book.title}"