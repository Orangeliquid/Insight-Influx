from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

class RandomUser(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    age = models.IntegerField()
    country = models.CharField(max_length=50)
    picture_large = models.URLField()
    picture_medium = models.URLField()
    picture_thumbnail = models.URLField()
    years_of_experience = models.IntegerField()
    bio_info = models.TextField()

    @classmethod
    def create_from_post_data(cls, post_data):
        """
        Create a RandomUser instance from POST data.
        """
        return cls.objects.create(
            first_name=post_data.get('first_name'),
            last_name=post_data.get('last_name'),
            age=post_data.get('age'),
            country=post_data.get('country'),
            picture_large=post_data.get('picture_large'),
            picture_medium=post_data.get('picture_medium'),
            picture_thumbnail=post_data.get('picture_thumbnail'),
            years_of_experience=post_data.get('bio', {}).get('yoe'),  # Populate years of experience
            bio_info=post_data.get('bio', {}).get('info'),  
        )
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    

class NewUser(models.Model):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(max_length=254, unique=True)
    password = models.CharField(max_length=128)  # This will be hashed

    def __str__(self):
        return self.username
    
    @classmethod
    def create_user(cls, username, email, raw_password):
        """
        Create a new user instance with the provided data.
        The raw password is hashed before saving.
        """
        hashed_password = make_password(raw_password)
        return cls.objects.create(username=username, email=email, password=hashed_password)
