# Generated by Django 3.2.10 on 2023-08-01 07:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0008_alter_gallery_gallery_type'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='gallerymedia',
            options={'verbose_name_plural': 'Gallery Media'},
        ),
        migrations.RemoveField(
            model_name='gallerymedia',
            name='sort_order',
        ),
    ]
