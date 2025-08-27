AI Microservices with Flowise + LangChain

Repository Name Suggestion: ai-microservices-flowise

Overview

This project implements modular AI microservices for text summarization, document Q&A, and dynamic learning path suggestions using Flowise and LangChain.
It demonstrates backend APIs and a simple frontend for interaction, making it easy to test and extend.

Features

Text Summarization: Summarizes large text content efficiently.

Document Q&A: Answers questions based on uploaded or provided text.

Dynamic Learning Path: Generates a step-by-step learning path for any topic.

Technologies Used

Backend: FastAPI, LangChain, Ollama

Frontend: React, Tailwind CSS, Vite

Postman Collection: Ready-to-use API requests

Folder Structure
AI_Flowise_Internship/
├── backend/                  # FastAPI backend microservices
├── frontend/                 # React + Tailwind frontend
├── postman/                  # Postman collection for API testing
└── README.md                 # Project documentation

Setup Instructions
Backend
cd backend
pip install -r requirements.txt
uvicorn app:app --reload --port 8000

Frontend
cd frontend
npm install
npm run dev

Access Frontend

Open your browser at http://localhost:5173 (or the port shown in terminal) to interact with the microservices.

API Endpoints

POST /summarize → { text }

POST /qa → { text, question }

POST /learning-path → { text }

Postman Collection

Import postman/AI_Microservices.postman_collection.json to test all APIs quickly.

Notes

Frontend is optional but included for better interaction.

LLM can be replaced with other open-source models if needed.

Easy to extend with additional AI microservices in the future.
