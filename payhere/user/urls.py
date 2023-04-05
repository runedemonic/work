from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.SignupView.as_view(), name='signup'),
    path('management/', views.ManagementList.as_view(), name='expense-list'),
    path('management/<int:pk>/', views.ManagementDetail.as_view(), name='expense-detail'),
]
