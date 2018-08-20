from django.db import models

# Create your models here.
class ReviewCard(models.Model):
    title = models.CharField(max_length=50)
    rating = models.IntegerField()
    postDate = models.DateField()
    releaseYear = models.IntegerField()
    thumbnail = models.URLField()
    def __str__(self):
        return self.title + " card";

    
class Review(models.Model):
    title = models.CharField(max_length=50)
    entry = models.TextField()
    def __str__(self):
        return self.title + " review";