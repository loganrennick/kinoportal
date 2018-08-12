from rest_framework import serializers
from .models import ReviewCard
from .models import Review

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'entry',
        )
        model = Review

class ReviewCardSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'rating',
            'postDate', 
            'releaseYear',
        )
        model = ReviewCard