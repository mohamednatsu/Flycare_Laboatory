from django.shortcuts import render, get_object_or_404
from .models import Laboratory
from msilib.schema import ListView
from urllib import request
from django.http import JsonResponse 
from django.http import HttpResponse 
from django.template import loader
from django.shortcuts import render, redirect
from .models import  Laboratory , Report

def home(request):
    return render(request, 'HomePage.html')


def test(request):
    
    return render(request, 'test.html')

def research(request):
    return render(request, 'research.html')

def services(request):
    return render(request, 'Services.html')

def Contact(request):
    return render(request, 'Contact_Us.html')

def About(request):
    return render(request, 'About_Us.html')

def Features(request):
    return render(request, 'features.html')

def addpc(request):
    return render(request, 'addpc.html')

def listpc(request):
    labs = Laboratory.objects.all()
    context = {
        'labs':labs
    }
    return render(request, 'listpc.html', context)

def report(request):
    if request.method == 'POST':
        
        reportcontent = request.POST.get('report')
        idlab = request.POST.get('idlab')
        idpc = request.POST.get('idpc')
        messege = Report(report= reportcontent, lab_id=idlab , pc_id= idpc)
        messege.save()
        print(reportcontent)
    else :
        messege = Report()
    return render(request, 'report.html')

def search(request):
    return render(request, 'search.html')

def list(request):
    labs = Laboratory.objects.all()
    context = {
        'labs':labs
    }
    return render(request, 'list.html', context)

    
def lab(request):
    labs = Laboratory.objects.all()
    if request.method == 'POST':
        namelab = request.POST.get('namelab')
        Build = request.POST.get('Build')
        Floor = request.POST.get('Floor')
        capacity = request.POST.get('capacity')
        Chair = request.POST.get('Chair')
        numpc = request.POST.get('pc')
        status = request.POST.get('status')
        lab = Laboratory(
        name=namelab,
        building_number=Build,
        floor_number=Floor,
        capacity=capacity,
        Chairnum = Chair,
        numpcnum = numpc,
        statuspc = status,
        )
        print(Chair)
        lab.save()
    else:
        lab = Laboratory()
    return render(request, 'add.html')

def delete(request, id):
    labs = Laboratory.objects.all(lab_id=id)
    print(id)
    labs.delete()
    context = {
        'labs':labs
    }
    return redirect('/')


def reportu(request):
    if request.method == 'POST':
        reportcontent = request.POST.get('report')
        idlab = request.POST.get('idlab')
        idpc = request.POST.get('idpc')
        # ------
        messege = Report(report= reportcontent, lab_id=idlab , pc_id= idpc)
        # messege.save()
        print(reportcontent)
    else:
        messege = Report()
    return render(request, "report.html",)
