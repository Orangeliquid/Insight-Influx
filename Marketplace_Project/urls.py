"""
URL configuration for Marketplace_Project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .views import home, SaveRandomUsers, signup_view, csrf_token_endpoint, signin_view, RandomUserListView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),  # Map the home view to the root URL
    path('save-random-users/', SaveRandomUsers, name='save_random_users'),
    path('api/random-users/', RandomUserListView.as_view(), name='random_user_list'), 
    path('sign-up-view/', signup_view, name='signup_view'),
    path('csrf-token-endpoint/', csrf_token_endpoint, name='csrf_token_endpoint'),
    path('sign-in-view/', signin_view, name='signin_view'),
]
