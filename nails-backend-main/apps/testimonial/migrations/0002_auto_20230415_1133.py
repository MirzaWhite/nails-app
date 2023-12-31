# Generated by Django 3.2.10 on 2023-04-15 06:03

from django.db import migrations, models
import versatileimagefield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('testimonial', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='testimonial',
            name='hosted_url_desktop',
            field=models.FileField(blank=True, null=True, upload_to='testimonial/desktop_video'),
        ),
        migrations.AddField(
            model_name='testimonial',
            name='hosted_url_mobile',
            field=models.FileField(blank=True, null=True, upload_to='testimonial/mobile_video'),
        ),
        migrations.AddField(
            model_name='testimonial',
            name='provider',
            field=models.CharField(blank=True, choices=[('YOUTUBE', 'Youtube'), ('FACEBOOK', 'Facebook'), ('INSTAGRAM', 'Instagram'), ('VIMEO', 'Vimeo')], max_length=40, null=True),
        ),
        migrations.AddField(
            model_name='testimonial',
            name='provider_url',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='testimonial',
            name='thumbnail_desktop',
            field=versatileimagefield.fields.VersatileImageField(blank=True, null=True, upload_to='', verbose_name='testimonial/thumbnail_desktop'),
        ),
        migrations.AddField(
            model_name='testimonial',
            name='thumbnail_mobile',
            field=versatileimagefield.fields.VersatileImageField(blank=True, null=True, upload_to='', verbose_name='testimonial/thumbnail_mobile'),
        ),
        migrations.AlterField(
            model_name='testimonial',
            name='desktop_image',
            field=versatileimagefield.fields.VersatileImageField(blank=True, null=True, upload_to='testimonial/desktop_images'),
        ),
        migrations.AlterField(
            model_name='testimonial',
            name='mobile_image',
            field=versatileimagefield.fields.VersatileImageField(blank=True, null=True, upload_to='testimonial/mobile_images'),
        ),
        migrations.AlterField(
            model_name='testimonial',
            name='testimonial_type',
            field=models.CharField(choices=[('CLIENT', 'CLIENT'), ('CELEBRITY', 'CELEBRITY'), ('FRANCHISE', 'FRANCHISE')], max_length=30),
        ),
    ]
