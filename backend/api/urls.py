from django.urls import path
from rest_framework_simplejwt.views import (TokenRefreshView) # type: ignore
from . import views

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token-obtain'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),
    path('register/', views.RegisterView.as_view(), name='register-user'),
    path('test/', views.protectedView, name='test'),
    path('', views.view_all_routs, name='all-routers'),
]
