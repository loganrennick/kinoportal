from rest_framework import generics

from .models import Review, ReviewCard
from .serializers import ReviewSerializer, ReviewCardSerializer
from rest_framework.filters import OrderingFilter

# Create your views here.
class ListReview(generics.ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class DetailReview(generics.RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class ListReviewCard(generics.ListCreateAPIView):
    queryset = ReviewCard.objects.all()
    serializer_class = ReviewCardSerializer
    filter_backends = (OrderingFilter,)
    ordering_fields = '__all__'
    ordering = ('-postDate',)


class DetailReviewCard(generics.RetrieveUpdateDestroyAPIView):
    queryset = ReviewCard.objects.all()
    serializer_class = ReviewCardSerializer