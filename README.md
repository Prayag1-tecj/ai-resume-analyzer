# 🚀 AI Resume Analyzer & ATS Feedback Platform

An AI-powered Resume Analysis Platform that evaluates resumes, provides actionable feedback, tracks historical performance, and helps job seekers improve their resumes using Generative AI.

---

## 🌐 Live Demo

### Frontend
https://your-vercel-url.vercel.app

### Backend API
https://your-render-url.onrender.com

---

## 📌 Features

### 🔐 Authentication
- User Registration
- Secure Login using JWT Authentication
- Protected Routes
- User Profile Management

### 📄 Resume Analysis
- Upload PDF Resume
- AI-powered Resume Evaluation
- Resume Score Generation
- Strengths Identification
- Weakness Detection
- Improvement Suggestions

### 📊 Dashboard
- Total Uploads Tracking
- Average Resume Score
- Best Resume Score
- Latest Resume Score
- Performance Overview

### 📈 Analysis History
- View Previous Resume Analyses
- Historical Score Tracking
- Detailed Analysis Records

### 🤖 AI Integration
- Gemini AI Powered Analysis
- ATS-Oriented Resume Feedback
- Structured Improvement Suggestions

### ☁️ Deployment
- Frontend deployed on Vercel
- Backend deployed on Render
- PostgreSQL Database hosted on Neon

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- Axios
- React Router DOM
- CSS

## Backend
- Django
- Django REST Framework
- Simple JWT Authentication
- Gunicorn

## Database
- PostgreSQL
- Neon Database

## AI
- Google Gemini API

## Deployment
- Vercel
- Render

## Version Control
- Git
- GitHub

---

# 🏗️ Architecture Diagram

```text
┌─────────────────┐
│      User       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ React Frontend  │
│    (Vercel)     │
└────────┬────────┘
         │ REST API
         ▼
┌─────────────────┐
│ Django Backend  │
│    (Render)     │
└───────┬─────────┘
        │
 ┌──────┴─────────┐
 │                │
 ▼                ▼
PostgreSQL     Gemini AI
 (Neon DB)     Analysis
```

---

# 📂 Project Structure

```text
AI_Resume_Analyzer/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── accounts/
├── resumes/
├── config/
├── media/
│
├── manage.py
├── requirements.txt
└── README.md
```

---

# 📸 Screenshots

## User Registration

> Upload screenshot showing registration page.

```markdown
![Registration Page](screenshots/register-page.png)
```

---

## Login Page

> Upload screenshot showing login page.

```markdown
![Login Page](screenshots/login-page.png)
```

---

## Dashboard

> Upload screenshot showing dashboard metrics (Uploads, Average Score, Best Score, Latest Score).

```markdown
![Dashboard](screenshots/dashboard.png)
```

---

## Resume Upload

> Upload screenshot showing PDF upload interface.

```markdown
![Upload Resume](screenshots/upload-page.png)
```

---

## Resume Analysis Result

> Upload screenshot showing:
> - Resume Score
> - Strengths
> - Weaknesses
> - Suggestions

```markdown
![Analysis Result](screenshots/analysis-result.png)
```

---

## Analysis History

> Upload screenshot showing historical analyses table/list.

```markdown
![Analysis History](screenshots/history-page.png)
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/ai-resume-analyzer.git

cd ai-resume-analyzer
```

## Backend Setup

```bash
python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# 🔑 Environment Variables

## Backend (.env)

```env
SECRET_KEY=your_secret_key

DEBUG=False

DB_NAME=your_db_name

DB_USER=your_db_user

DB_PASSWORD=your_db_password

DB_HOST=your_db_host

DB_PORT=5432

GEMINI_API_KEY=your_gemini_api_key
```

## Frontend (.env)

```env
VITE_API_URL=https://your-render-backend-url.onrender.com/api
```

---

# 🔌 API Endpoints

## Authentication

```http
POST /api/auth/register/
POST /api/login/
POST /api/token/refresh/
GET  /api/auth/profile/
```

## Resume Analysis

```http
POST /api/resume/upload/
GET  /api/dashboard/
GET  /api/history/
```

---

# 🚀 Future Enhancements

- ATS Compatibility Checker
- Resume Keyword Matching
- Job Description Comparison
- AI Cover Letter Generator
- Export Analysis Reports (PDF)
- Advanced Analytics Dashboard

---

# 👨‍💻 Author

**Prayag Raj Shrivastava**

GitHub:
https://github.com/Prayag1-tecj

LinkedIn:
https://www.linkedin.com/in/prayag-raj-shrivastava-129875293/


---

# 📜 License

This project is licensed under the MIT License.
