from django.db import models
from django.contrib.auth.models import User


class Resume(models.Model):

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    resume_file = models.FileField(
        upload_to='resumes/'
    )

    extracted_text = models.TextField()

    uploaded_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.user.username


class ResumeAnalysis(models.Model):

    resume = models.OneToOneField(
        Resume,
        on_delete=models.CASCADE
    )

    strengths = models.JSONField()

    weaknesses = models.JSONField()

    recommendations = models.JSONField()

    score = models.IntegerField()

    created_at = models.DateTimeField(
        auto_now_add=True
    )
