# Generated by Django 3.2.10 on 2023-07-31 11:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('testimonial', '0008_merge_0002_auto_20230415_1133_0007_auto_20230524_1227'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='testimonial',
            name='hosted_url_desktop',
        ),
        migrations.RemoveField(
            model_name='testimonial',
            name='hosted_url_mobile',
        ),
        migrations.RemoveField(
            model_name='testimonial',
            name='provider',
        ),
        migrations.RemoveField(
            model_name='testimonial',
            name='provider_url',
        ),
        migrations.RemoveField(
            model_name='testimonial',
            name='thumbnail_desktop',
        ),
        migrations.RemoveField(
            model_name='testimonial',
            name='thumbnail_mobile',
        ),
    ]
