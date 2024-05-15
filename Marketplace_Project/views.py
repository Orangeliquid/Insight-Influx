from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib.auth.decorators import login_required
from django.db.utils import IntegrityError
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import RandomUser
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import RandomUserSerializer
from django.middleware.csrf import get_token
from django.http import JsonResponse, HttpResponseBadRequest
from rest_framework_simplejwt.tokens import AccessToken
import json
import logging


@csrf_exempt
def SaveRandomUsers(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            print("Received data:", data)  # Print received data for debugging
            if isinstance(data, list):
                random_users = []
                for user_data in data:
                    if isinstance(user_data, dict):
                        random_users.append(RandomUser(
                            first_name=user_data.get('first_name', ''),
                            last_name=user_data.get('last_name', ''),
                            age=user_data.get('age', 0),
                            country=user_data.get('country', ''),
                            picture_large=user_data.get('picture_large', ''),
                            picture_medium=user_data.get('picture_medium', ''),
                            picture_thumbnail=user_data.get('picture_thumbnail', ''),
                            years_of_experience=user_data.get('bio', {}).get('yoe', 0),
                            bio_info=user_data.get('bio', {}).get('info', '')
                        ))
                    else:
                        return JsonResponse({'error': 'Invalid data format. Expected list of dictionaries.'}, status=400)
                RandomUser.objects.bulk_create(random_users)
                return JsonResponse({'message': 'Random users created successfully'}, status=201)
            else:
                return JsonResponse({'error': 'Invalid data format. Expected list.'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON data'}, status=400)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)

    
def handle_post_request(request):
    if request.method == 'POST':
        post_data = request.POST
        RandomUser.create_from_post_data(post_data)
        return JsonResponse({'message': 'Data saved successfully'}, status=201)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=400)

logger = logging.getLogger(__name__)

def csrf_token_endpoint(request):
    # Get CSRF token
    csrf_token = get_token(request)
    logger.debug(f"CSRF token: {csrf_token}")  # Add debug log
    return JsonResponse({'csrfToken': csrf_token})

def home(request):
    return render(request, 'home.html')

class RandomUserListView(APIView):
    def get(self, request):
        queryset = RandomUser.objects.all()
        serializer = RandomUserSerializer(queryset, many=True)
        return Response(serializer.data)

@csrf_exempt
def signup_view(request):
    if request.method == 'POST':
        # Deserialize JSON data from request.body
        data = json.loads(request.body)
        
        # Access data fields
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        # Create a new user with hashed password
        try:
            user = User.objects.create_user(username, email, password)
            user.save()  # Save the user object to the database

            # Authenticate and log in the newly created user
            login(request, user)
            return JsonResponse({'message': 'User registered successfully'})

        except IntegrityError:
            # Handle potential username or email conflict errors
            return HttpResponseBadRequest('Username or email already exists.')

    else:
        # Handle GET requests or other HTTP methods if needed
        return JsonResponse({'message': 'Method not allowed'}, status=405)
    
@csrf_exempt
def signin_view(request):
    if request.method == 'POST':
        try:
            # Deserialize JSON data from request.body
            data = json.loads(request.body)
            # print(data)
            logger.debug("Received sign-in data:", data)  # Add debug log

            # Access email and password from data
            password = data.get('password')
            username =data.get('username')

            # print(f"Username:{username}, Password: {password}")  # Add debug log

            # Authenticate user
            user = authenticate(request, username=username, password=password)
            # print(user)
            if user is not None:
                # User authenticated, log them in
                login(request, user)
                return JsonResponse({'message': 'Sign-in successful'})
            else:
                # Authentication failed
                print('Invalid email or password')
                return HttpResponseBadRequest('Invalid Username or password')

        except json.JSONDecodeError as e:
            logger.error("Error decoding JSON data:", e)  # Add error log
            print('Invalid JSON data')
            return HttpResponseBadRequest('Invalid JSON data')

    else:
        # Handle GET requests or other HTTP methods if needed
        return JsonResponse({'error': 'Method not allowed'}, status=405)
