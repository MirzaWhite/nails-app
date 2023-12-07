# Generated by Django 3.2.10 on 2023-04-19 07:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('faq', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='faqsection',
            options={'ordering': ('sort_order',), 'verbose_name_plural': "FAQ's"},
        ),
        migrations.AddField(
            model_name='faqsection',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='faqsection',
            name='sort_order',
            field=models.PositiveSmallIntegerField(default=0),
        ),
    ]
