
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.shortcuts import render

def landing_page(request):
    return render(request, 'landing_page.html')


def login_view(request):
    return render(request, 'login.html')



def tela_principal(request):
    return render(request, 'tela_principal.html')


def enviar_documentos(request):
    return render(request, 'enviar_documentos.html')


