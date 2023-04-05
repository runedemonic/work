from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Management
from .serializers import ManagementSerializer


class ManagementList(generics.ListCreateAPIView):
    queryset = Management.objects.all()
    serializer_class = ManagementSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ManagementDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Management.objects.all()
    serializer_class = ManagementSerializer
    permission_classes = [IsAuthenticated]
