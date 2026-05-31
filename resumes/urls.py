from django.urls import path

from .views import (
    ResumeUploadView,
    ResumeHistoryView
)

urlpatterns = [

    path(
        'upload/',
        ResumeUploadView.as_view()
    ),

    path(
        'history/',
        ResumeHistoryView.as_view()
    ),
]