from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView

app_name = "user"

urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('signup/', views.SignupView.as_view(), name='signup'),
    path('management/', views.ManagementList.as_view(), name='management-list'),
    path('management/<int:pk>/', views.ManagementDetail.as_view(), name='management-detail'),
    path('ledger-entries/', views.LedgerEntryCreateAPIView.as_view(), name='ledger-entry-create'),
    path('ledger-entries/<int:pk>/', views.LedgerEntryUpdateAPIView.as_view(), name='ledger-entry-update'),
    path('ledger-entries_list/', views.LedgerEntryListAPIView.as_view(), name='ledger-entry-list'),
    path('ledger-entries_list/<int:pk>/', views.LedgerEntryDetailAPIView.as_view(), name='ledger-entry-detail'),
    path('ledger-entries/<int:pk>/delete/', views.LedgerEntryDeleteAPIView.as_view(), name='ledger-entry-delete'),
]
