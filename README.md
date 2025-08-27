# AI Microservices Internship Project

## Setup Backend
cd backend
pip install -r requirements.txt
uvicorn app:app --reload --port 8000

## Setup Frontend
cd frontend
npm install
npm run dev

## APIs
- POST /summarize → { text }
- POST /qa → { text, question }
- POST /learning-path → { text }

## Postman
Import `postman/AI_Microservices.postman_collection.json` to test all endpoints
