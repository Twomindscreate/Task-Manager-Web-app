from django.shortcuts import render
from .models import User
from .serializers import MyTOPS, RegistrationSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView # type: ignore
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTOPS

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny,]
    serializer_class = RegistrationSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated,])
def protectedView(request):
    output = f"Access is granted for {request.user}"
    return Response({'response' : output}, status=status.HTTP_200_OK)

@api_view(['GET'])
def view_all_routs(request):
    data = [
        'api/token/refresh',
        'api/register/',
        'api/token/'
     
    ]
    return Response(data)