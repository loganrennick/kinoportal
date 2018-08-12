# Generated by Django 2.1 on 2018-08-11 22:25

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ReviewCard',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('rating', models.IntegerField()),
                ('postDate', models.DateField()),
                ('releaseYear', models.IntegerField()),
                ('movieID', models.IntegerField()),
            ],
        ),
    ]
