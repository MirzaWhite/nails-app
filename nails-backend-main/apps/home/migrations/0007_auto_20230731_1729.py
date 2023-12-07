# Generated by Django 3.2.10 on 2023-07-31 11:59

from django.db import migrations
import versatileimagefield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_merge_0002_auto_20230415_1133_0005_alter_city_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homeslider',
            name='thumbnail_desktop',
            field=versatileimagefield.fields.VersatileImageField(blank=True, null=True, upload_to='slider/thumbnail_desktop'),
        ),
        migrations.AlterField(
            model_name='homeslider',
            name='thumbnail_mobile',
            field=versatileimagefield.fields.VersatileImageField(blank=True, null=True, upload_to='slider/thumbnail_mobile'),
        ),
    ]
