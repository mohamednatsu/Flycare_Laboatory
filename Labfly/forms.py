from django import forms
from .models import Laboratory

class LaboratoryForm(forms.ModelForm):
    class Meta:
        model = Laboratory
        fields = ['name', 'lab_id', 'building_number', 'floor_number', 'capacity']