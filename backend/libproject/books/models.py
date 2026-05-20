from django.db import models
from authors.models import Author


class Book(models.Model):
    title = models.CharField(max_length=200)

    author = models.ForeignKey(
        Author,
        on_delete=models.CASCADE,
        related_name="books"
    )

    category = models.CharField(max_length=100)

    published_date = models.DateField()

    available = models.BooleanField(default=True)

    def __str__(self):
        return self.title