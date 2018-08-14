# todos/urls.py
from django.urls import path

from . import views

urlpatterns = [
    path('r/', views.ListReview.as_view()),
    path('r/<int:pk>/', views.DetailReview.as_view()),
    path('rc/', views.ListReviewCard.as_view()),
    path('rc/<int:pk>/', views.DetailReviewCard.as_view()),
]