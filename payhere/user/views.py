from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Management
from .serializers import ManagementSerializer
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class SignupView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response(
                {'error': 'Username and password are required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        user = User.objects.create_user(username=username, email=username, password=password)
        user.save()
        return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)


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
