# Generated by Django 3.2.10 on 2023-04-15 06:02
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0002_auto_20230417_1700'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gallery',
            name='gallery_type',
            field=models.CharField(choices=[('PORTFOLIO', 'PORTFOLIO'), ('CELEBRITY', 'CELEBRITY'), ('CLIENT', 'CLIENT')], max_length=30),
        ),
    ]
