# Generated by Django 3.2.10 on 2023-04-28 10:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0005_alter_gallerymedia_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gallery',
            name='gallery_type',
            field=models.CharField(choices=[('ABOUT_US', 'ABOUT_US'), ('CELEBRITY', 'CELEBRITY'), ('CLIENT', 'CLIENT')], max_length=30),
        ),
    ]
