from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(["GET"])
def hello(request):
    return Response({"message": "Hola desde Django 🚀"})

@api_view(["GET"])
def home(request):
    return Response({"message": "Bienvenido a la API 🚀"})