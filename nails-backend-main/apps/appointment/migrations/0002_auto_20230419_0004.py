# Generated by Django 3.2.10 on 2023-04-18 18:34
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0001_initial'),
        ('appointment', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Slot',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('time', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name_plural': 'Slots',
            },
        ),
        migrations.AlterModelOptions(
            name='bookappointment',
            options={'verbose_name_plural': 'Book Appointments'},
        ),
        migrations.RemoveField(
            model_name='bookappointment',
            name='service',
        ),
        migrations.AddField(
            model_name='bookappointment',
            name='service',
            field=models.ManyToManyField(blank=True, related_name='book_appointments', to='product.Service'),
        ),
        migrations.AlterField(
            model_name='bookappointment',
            name='time',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='book_appointments', to='appointment.slot'),
        ),
    ]
