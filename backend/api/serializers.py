from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer # type: ignore
from rest_framework import serializers
from rest_framework.validators import UniqueValidator


class UserSerializer(serializers.ModelField):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class MyTOPS(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['full_name'] = user.profile.full_name
        token['username'] = user.username
        token['email'] = user.email

        return token
    
class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True, required = True, validators = [validate_password] )
    password2 = serializers.CharField(write_only = True, required = True)
    full_name = serializers.CharField(write_only = True, required = True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password2', 'full_name']

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Passwords must match."})
        
        return attrs
    
    def create(self, validate_data):
        user = User.objects.create(
            username = validate_data['username'],
            email = validate_data['email'],
        )
        user.set_password(validate_data['password'])

        user.save()
        
        if "full_name" in validate_data:
            user.profile.full_name = validate_data["full_name"]
            user.profile.save()

        return user 
    
