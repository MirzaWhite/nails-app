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
            name='Gallery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('gallery_type', models.CharField(choices=[('PORTFOLIO', 'PORTFOLIO'), ('CELEBRITY', 'CELEBRITY'), ('CLIENT', 'CLIENT')], max_length=30)),
            ],
            options={
                'verbose_name_plural': 'Gallery',
            },
        ),
        migrations.CreateModel(
            name='GalleryMedia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('mobile_image', versatileimagefield.fields.VersatileImageField(blank=True, null=True, upload_to='gallery_media/mobile_image')),
                ('desktop_image', versatileimagefield.fields.VersatileImageField(blank=True, null=True, upload_to='gallery_media/desktop_image')),
                ('hosted_url_mobile', models.FileField(blank=True, null=True, upload_to='gallery_media/mobile_video')),
                ('hosted_url_desktop', models.FileField(blank=True, null=True, upload_to='gallery_media/desktop_video')),
                ('provider', models.CharField(blank=True, choices=[('YOUTUBE', 'Youtube'), ('FACEBOOK', 'Facebook'), ('INSTAGRAM', 'Instagram'), ('VIMEO', 'Vimeo')], max_length=40, null=True)),
                ('provider_url', models.URLField(blank=True, null=True)),
                ('thumbnail_mobile', versatileimagefield.fields.VersatileImageField(blank=True, null=True, upload_to='', verbose_name='gallery_media/thumbnail_mobile')),
                ('thumbnail_desktop', versatileimagefield.fields.VersatileImageField(blank=True, null=True, upload_to='', verbose_name='gallery_media/thumbnail_desktop')),
                ('name', models.CharField(blank=True, max_length=100, null=True)),
                ('description', models.CharField(blank=True, max_length=200, null=True)),
                ('gallery', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='gallery_medias', to='gallery.gallery')),
            ],
            options={
                'verbose_name_plural': 'Gallery Media',
            },
        ),
    ]
