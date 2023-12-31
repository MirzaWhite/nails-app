# Generated by Django 3.2.10 on 2023-04-15 10:51
from django.db import migrations, models
import django.db.models.deletion
import versatileimagefield.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='HomeSlider',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('mobile_image', versatileimagefield.fields.VersatileImageField(blank=True, null=True, upload_to='slider/mobile_images')),
                ('desktop_image', versatileimagefield.fields.VersatileImageField(blank=True, null=True, upload_to='slider/desktop_images')),
                ('hosted_url_mobile', models.FileField(blank=True, null=True, upload_to='slider/mobile_video')),
                ('hosted_url_desktop', models.FileField(blank=True, null=True, upload_to='slider/desktop_video')),
                ('provider', models.CharField(blank=True, choices=[('YOUTUBE', 'Youtube'), ('FACEBOOK', 'Facebook'), ('INSTAGRAM', 'Instagram'), ('VIMEO', 'Vimeo')], max_length=40, null=True)),
                ('provider_url', models.URLField(blank=True, null=True)),
                ('thumbnail_mobile', versatileimagefield.fields.VersatileImageField(blank=True, null=True, upload_to='', verbose_name='slider/thumbnail_mobile')),
                ('thumbnail_desktop', versatileimagefield.fields.VersatileImageField(blank=True, null=True, upload_to='', verbose_name='slider/thumbnail_desktop')),
                ('sort_order', models.PositiveSmallIntegerField(default=0)),
            ],
            options={
                'verbose_name_plural': 'Home Sliders',
            },
        ),
        migrations.CreateModel(
            name='State',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=40, unique=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='City',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=40, unique=True)),
                ('state', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cities', to='home.state')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
