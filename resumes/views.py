from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import Resume
from .models import ResumeAnalysis

from .utils import extract_text_from_pdf
from .gemini_service import analyze_resume


class ResumeUploadView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def post(self, request):

        pdf_file = request.FILES.get(
            "resume"
        )

        if not pdf_file:

            return Response(
                {
                    "error":
                    "Resume required"
                },
                status=400
            )

        extracted_text = (
            extract_text_from_pdf(
                pdf_file
            )
        )

        resume = Resume.objects.create(
            user=request.user,
            resume_file=pdf_file,
            extracted_text=extracted_text
        )

        result = analyze_resume(
            extracted_text
        )

        analysis = ResumeAnalysis.objects.create(
            resume=resume,
            strengths=result["strengths"],
            weaknesses=result["weaknesses"],
            recommendations=result[
                "recommendations"
            ],
            score=result["score"]
        )

        return Response({
            "resume_id": resume.id,
            "analysis_id": analysis.id,
            "result": result
        })


class ResumeHistoryView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        analyses = ResumeAnalysis.objects.filter(
            resume__user=request.user
        ).order_by("-created_at")

        data = []

        for analysis in analyses:

            data.append({
                "id": analysis.id,
                "score": analysis.score,
                "strengths": analysis.strengths,
                "weaknesses": analysis.weaknesses,
                "recommendations": analysis.recommendations,
                "created_at": analysis.created_at,
            })

        return Response(data)