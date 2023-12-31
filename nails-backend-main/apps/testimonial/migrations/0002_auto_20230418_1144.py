# Generated by Django 3.2.10 on 2023-04-18 06:14

from django.db import migrations, models
import versatileimagefield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('testimonial', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='testimonial',
            options={'ordering': ('sort_order',), 'verbose_name_plural': 'Testimonials'},
        ),
        migrations.AlterField(
            model_name='testimonial',
            name='role',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='testimonial',
            name='thumbnail_desktop',
            field=versatileimagefield.fields.VersatileImageField(blank=True, null=True, upload_to='testimonial/thumbnail_desktop'),
        ),
        migrations.AlterField(
            model_name='testimonial',
            name='thumbnail_mobile',
            field=versatileimagefield.fields.VersatileImageField(blank=True, null=True, upload_to='testimonial/thumbnail_mobile'),
        ),
    ]
