# Generated by Django 3.2.10 on 2023-04-18 06:45

from django.db import migrations
import versatileimagefield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('testimonial', '0003_auto_20230418_1202'),
    ]

    operations = [
        migrations.AlterField(
            model_name='testimonial',
            name='desktop_image',
            field=versatileimagefield.fields.VersatileImageField(default='1', upload_to='testimonial/desktop_images'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='testimonial',
            name='mobile_image',
            field=versatileimagefield.fields.VersatileImageField(default='1', upload_to='testimonial/mobile_images'),
            preserve_default=False,
        ),
    ]
