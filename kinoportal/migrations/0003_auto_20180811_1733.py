# Generated by Django 2.1 on 2018-08-11 23:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kinoportal', '0002_review'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='reviewcard',
            name='movieID',
        ),
        migrations.AlterField(
            model_name='review',
            name='entry',
            field=models.TextField(),
        ),
    ]