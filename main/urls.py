from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.landing_page, name='landing_page'),
    path('login/', views.login_view, name='login'),  
    path('tela_principal/', views.tela_principal, name='tela_principal'),  
    path('Enviar_documentos/', views.Enviar_documentos, name='Enviar_documentos'),  

]
