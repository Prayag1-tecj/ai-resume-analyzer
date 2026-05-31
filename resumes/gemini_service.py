import os
import json

import google.generativeai as genai

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    "gemini-2.5-flash"
)


def analyze_resume(resume_text):

    prompt = f"""
    Analyze this resume.

Return ONLY valid JSON.

Rules:

1. strengths must contain SHORT bullet points.
2. weaknesses must contain SHORT bullet points.
3. recommendations must contain SHORT bullet points.
4. Maximum 5 items per list.
5. Each item maximum 10 words.
6. Score between 0 and 100.

Format:

{{
  "strengths": [],
  "weaknesses": [],
  "recommendations": [],
  "score": 0
}}

    Resume:

    {resume_text}
    """

    response = model.generate_content(prompt)

    cleaned = response.text.replace(
        "```json",
        ""
    ).replace(
        "```",
        ""
    )

    return json.loads(cleaned)