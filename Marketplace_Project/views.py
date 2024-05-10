from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import RandomUser
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import RandomUserSerializer
from .models import NewUser
import json


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


def home(request):
    return render(request, 'home.html')

class RandomUserListView(APIView):
    def get(self, request):
        queryset = RandomUser.objects.all()
        serializer = RandomUserSerializer(queryset, many=True)
        return Response(serializer.data)

def SignUpView(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        raw_password = request.POST['password']

        # Create the user using the create_user method
        NewUser.create_user(username=username, email=email, raw_password=raw_password)

        # Redirect the user after successful signup
        return redirect('signup_success')  # Redirect to a success page or login page

    else:
        # Display signup form
        return render(request, 'signup.html')

