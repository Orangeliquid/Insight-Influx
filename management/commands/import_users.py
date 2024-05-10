import json
from django.core.management.base import BaseCommand
from Marketplace_Project.models import RandomUser

class Command(BaseCommand):
    help = 'Import random users data from a JSON file to the database'

    def handle(self, *args, **kwargs):
        file_path = 'C:/Users/hardy/OneDrive/Desktop/100DaysOfPython/Python Project/Marketplace_Creation/Marketplace_Project/Marketplace_Project/random_users_data.json'
        
        with open(file_path, 'r', encoding='utf-8') as file:
            users_data = json.load(file)
        
        for user_data in users_data:
            name = user_data.get('name', {})
            location = user_data.get('location', {})
            dob = user_data.get('dob', {})
            picture = user_data.get('picture', {})
            bio = user_data.get('bio', {})

            RandomUser.objects.create(
                first_name=name.get('first'),
                last_name=name.get('last'),
                age=dob.get('age'),
                country=location.get('country'),
                picture_large=picture.get('large'),
                picture_medium=picture.get('medium'),
                picture_thumbnail=picture.get('thumbnail'),
                years_of_experience=bio.get('yoe'),  # Include years of experience (yoe)
                bio_info=bio.get('info')  # Include bio info
            )

        self.stdout.write(self.style.SUCCESS('Random users data imported successfully'))
