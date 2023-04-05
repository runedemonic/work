from django.urls import path
from . import views

urlpatterns = [
    path('management/', views.ExpenseList.as_view(), name='expense-list'),
    path('management/<int:pk>/', views.ExpenseDetail.as_view(), name='expense-detail'),
]
