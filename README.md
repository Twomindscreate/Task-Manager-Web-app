# Task-Manager-Web-app

Task Manager Web application
virtualenv venv

source venv/bin/activate

pip install django djangorestframework django-cors-headers djangorestframework-simplejwt

python3 manage.py migrate

python3 manage.py createsuperuser

python3 manage.py runserver
