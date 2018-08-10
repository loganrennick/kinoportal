from django.db import models

# Create your models here.
class ReviewCard(models.Model):
    title = models.CharField(max_length=50)
    rating = models.IntegerField()
    postDate = models.DateField()
    releaseYear = models.IntegerField()
    movieID = models.IntegerField()
    