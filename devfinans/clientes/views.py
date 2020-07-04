from django.shortcuts import render,redirect
from .form import ClienteForm,LoginForm,Newsletter
from django.core.mail import send_mail
from django.contrib.auth import authenticate, login
from .form import Newsletter
def inicio(request):
    
    return render(request,'index.html')

def login_(request):

    #data = {}
    #form = LoginForm(request.POST or None)
    
   # email = LoginForm(request.POST['email'] or None)
   # senha = LoginForm(request.POST['senha'] or None)
   # user = authenticate(request, username=email, password=senha)
    #if user is not None:
    #    login(request, user)
    #    return redirect('inicio')
   # data['login'] = form
    return render(request,'login.html')



def cadastro(request):
    
    data = {}
    form = ClienteForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('cadastro')

    data['form'] = form
    return render(request,'cadastro.html',data)
 

def clientes_lista(request):
    
    clientes = Cliente.objects.all()
    
    return render(request,'clientes.html', {'cliente':clientes})

def envia_email(request):
    data = {}
    email = ClienteForm(request.POST or None)
    if email.is_valid():
        email.send_mail('Teste','Funcionou','gabrielcicero45@gmail.com',[{email}],fail_silently=False,)
    
    data['newsletter'] = email
    return render(request,'index.html',data)
