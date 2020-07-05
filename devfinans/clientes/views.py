from django.shortcuts import render,redirect
from .forms import Newsletter,ClienteForm
''',LoginForm,'''
from django.core.mail import send_mail
from django.contrib.auth import authenticate, login
from django.views import generic
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse
def inicio(request):
    form = Newsletter()
    if request.method == 'POST':
        form = Newsletter(request.POST)
        if form.is_valid():
            assunto = 'Novo Lead !!'
            menssagem = form.cleaned_data["email"]
            remetente = form.cleaned_data["email"]
            destinatario = ['gabrielcicero45@gmail.com']
            try:
                send_mail(assunto, menssagem, remetente, destinatario, fail_silently=True)
            except BadHeaderError:
                return HttpResponse('Invalid header found')
            return HttpResponse('Successo!')
    return render(request,'index.html', {'form': form})

def login_(request):
    if request.method == 'POST':
        usuario = request.POST.get('usuario')
        senha = request.POST.get('senha')
        user = authenticate(request,username= usuario, password=senha)
        if usuario is not None:
            login(request, user)
            return HttpResponse('Logou !')
    contexto = {}
    return render(request, 'login.html',contexto)

def cadastro(request):
    if request.method == 'POST':
        form = ClienteForm(request.POST)
        if form.is_valid():
            novo_cliente = form.save()
            novo_cliente = authenticate(
                username=form.cleaned_data['username'],
                password=form.cleaned_data['password1']
            )
            login(request, novo_cliente)
            return HttpResponse('Cadastrado com successo!')
    else:
        form = ClienteForm()
    return render(request, 'cadastro.html', {'form': form})
 


