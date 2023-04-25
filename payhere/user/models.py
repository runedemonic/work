from django.db import models
from django.contrib.auth.models import User


class Management(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    memo = models.TextField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.memo


class LedgerEntry(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    memo = models.TextField()
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username}: {self.amount} - {self.memo}"