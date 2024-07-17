from django.shortcuts import render
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View

DATA_FILE = '/Users/danielher/repos/kangacook/backend/recipes.json'

def get_data(request):
    with open(DATA_FILE, 'r') as file:
        data = json.load(file)
    return JsonResponse(data, safe=False)

@method_decorator(csrf_exempt, name='dispatch')
class PostData(View):
    def post(self, request):
        data = json.loads(request.body)
        with open(DATA_FILE, 'r+') as file:
            current_data = json.load(file)
            current_data.append(data)
            file.seek(0)
            json.dump(current_data, file, indent=4)
        return JsonResponse(data, status=201)
    
@method_decorator(csrf_exempt, name='dispatch')
class ToggleFavorite(View):
    def post(self, request):
        data = json.loads(request.body)
        try:
            with open(DATA_FILE, 'r+') as file:
                recipes = json.load(file)
                for recipe in recipes:
                    if recipe['id'] == data['id']:
                        recipe['favorite'] = data['favorite']
                file.seek(0)
                file.truncate()
                json.dump(recipes, file, indent=4)
            return JsonResponse({'status': 'success'}, status=200)
        except FileNotFoundError:
            return JsonResponse({'error': 'File not found'}, status=404)

post_data = PostData.as_view()
toggle_favorite = ToggleFavorite.as_view()