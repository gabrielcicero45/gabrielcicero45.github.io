from django.shortcuts import render,redirect
from .forms import Newsletter,ClienteForm
from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from django.core.mail import send_mail

from django.core.mail import send_mail

def inicio(request):
    form = Newsletter()
    if request.method == 'POST':
        form = Newsletter(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            send_mail('Seja Bem-vindo !!',
            'Olá Bem-vindo ao devfinans, aqui começa sua jornada rumo à independência financeira',
            'devfinanscontato@gmail.com',
            [email],
            fail_silently=True,)
        else:
             form = Newsletter()        
    return render(request,'index.html',{'form': form})

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
            return redirect('login')
    else:
        form = ClienteForm()
    return render(request, 'cadastro.html', {'form': form})
 


