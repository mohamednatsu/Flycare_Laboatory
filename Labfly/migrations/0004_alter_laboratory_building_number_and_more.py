# Generated by Django 4.2.1 on 2023-05-24 16:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Labfly', '0003_laboratory_chairnum_laboratory_numpcnum_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='laboratory',
            name='building_number',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='laboratory',
            name='capacity',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='laboratory',
            name='floor_number',
            field=models.IntegerField(default=0),
        ),
    ]
