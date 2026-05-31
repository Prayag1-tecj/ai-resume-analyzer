from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User

from .serializers import RegisterSerializer

from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response



class RegisterView(generics.CreateAPIView):

    queryset = User.objects.all()

    serializer_class = RegisterSerializer

class ProfileView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        return Response({

            "username": request.user.username,
            "email": request.user.email

        })



class TestUsersView(APIView):
    def get(self, request):
        return Response({
            "count": User.objects.count()
        })