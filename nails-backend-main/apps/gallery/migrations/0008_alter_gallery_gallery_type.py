# Generated by Django 3.2.10 on 2023-07-31 11:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0007_merge_20230720_1102'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gallery',
            name='gallery_type',
            field=models.CharField(choices=[('ABOUT_US', 'ABOUT_US'), ('CELEBRITY', 'CELEBRITY'), ('CLIENT', 'CLIENT')], max_length=30),
        ),
    ]