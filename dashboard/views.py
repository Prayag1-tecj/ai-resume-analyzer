from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from resumes.models import ResumeAnalysis


class DashboardView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        print("USER:", request.user)
        print("AUTH:", request.auth)

        analyses = ResumeAnalysis.objects.filter(
            resume__user=request.user
        ).order_by("created_at")

        if not analyses.exists():

            return Response({
                "total_uploads": 0,
                "average_score": 0,
                "latest_score": 0,
                "highest_score": 0,
                "recent_scores": [],
                "recent_analyses": []
            })

        scores = [a.score for a in analyses]

        avg_score = sum(scores) / len(scores)

        latest = analyses.last()

        recent_analyses = []

        for analysis in analyses.order_by("-created_at")[:5]:

            recent_analyses.append({
                "score": analysis.score,
                "created_at": analysis.created_at
            })

        return Response({
            "total_uploads": analyses.count(),
            "average_score": round(avg_score),
            "latest_score": latest.score,
            "highest_score": max(scores),

            "recent_scores": scores,
            "recent_analyses": recent_analyses,

            "top_strengths": [
                "Python",
                "Django",
                "REST APIs"
            ],

            "improvement_areas": [
                "Docker",
                "AWS",
                "System Design"
            ]
})