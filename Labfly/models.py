from django.db import models

# Create your models here.


class Laboratory(models.Model):
    id_lab = id
    name = models.CharField(max_length=50, null=True)
    building_number = models.IntegerField(default=0)
    floor_number = models.IntegerField(default=0)
    capacity = models.IntegerField(default=0)
    Chairnum = models.IntegerField(default=0)
    numpcnum = models.IntegerField(default=0)
    statuspc = models.CharField(max_length=50, null=True)
    def __str__(self):
        return self.name
    

class Report(models.Model):
    report = models.CharField(max_length=90, null=False)
    lab_id = models.IntegerField(default=0, null=False)
    pc_id  = models.IntegerField(default=0, null=False)
    
    
    
    

    





