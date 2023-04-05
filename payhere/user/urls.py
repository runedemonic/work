from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView

app_name = "user"

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('signup/', views.SignupView.as_view(), name='signup'),
    path('management/', views.ManagementList.as_view(), name='management-list'),
    path('management/<int:pk>/', views.ManagementDetail.as_view(), name='management-detail'),
]
