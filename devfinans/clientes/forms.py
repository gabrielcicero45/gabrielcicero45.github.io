from django.forms import ModelForm
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class ClienteForm(UserCreationForm):
    email = forms.EmailField(required=True, label='Email', error_messages={'exists': 'Este e-mail já existe !'})
    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')
    
    def salvar(self, commit=True):
        user = super(ClienteForm, self).save(commit=False)
        user.email = self.cleaned_data['email']
        if commit:
            user.save()
        return user

    def limpa_email(self):
        if User.objects.filter(email=self.cleaned_data['email']).exists():
            raise forms.ValidationError(self.fields['email'].error_messages['exists'])
        return self.cleaned_data['email']
'''class LoginForm(ModelForm):
    class Meta:
        model = User
        widgets ={
            'password1':forms.PasswordInput(),
        }
        fields = ['email','senha']'''

class Newsletter(forms.Form):
    email = forms.EmailField(required=True, label='Seu Email', error_messages={'exists': 'Este e-mail já existe!'})
    #forcefield = forms.CharField(
        #required=False, widget=forms.HiddenInput, label="Leave empty")'