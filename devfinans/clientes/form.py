from django.forms import ModelForm
from django import forms
from .models import Cliente

class ClienteForm(forms.ModelForm):
    class Meta:
        model = Cliente
        widgets ={
            'senha':forms.PasswordInput(),
        }
        fields = ['nome','email','senha']

class LoginForm(ModelForm):
    class Meta:
        model = Cliente
        widgets ={
            'senha':forms.PasswordInput(),
        }
        fields = ['email','senha']

class Newsletter(ModelForm):
    class Meta:
        model = Cliente
        fields = ['email']