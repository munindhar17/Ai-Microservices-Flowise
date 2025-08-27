🚀 AI Microservices Internship Project
📌 Overview

This project implements AI-powered microservices with separate backend and frontend components.
The services expose APIs for text summarization, question answering, and personalized learning path generation.

⚙️ Setup Instructions
🔧 Backend

Navigate to the backend folder:

cd backend


Install dependencies:

pip install -r requirements.txt


Start the backend server:

uvicorn app:app --reload --port 8000

🎨 Frontend

Navigate to the frontend folder:

cd frontend


Install dependencies:

npm install


Start the frontend app:

npm run dev

📡 API Endpoints
Method	Endpoint	Request Body	Description
POST	/summarize	{ "text": "..." }	Returns a summary of the given text
POST	/qa	{ "text": "...", "question": "..." }	Answers the given question based on the text
POST	/learning-path	{ "text": "..." }	Generates a learning path from the text
🧪 Testing with Postman

Import the collection:

postman/AI_Microservices.postman_collection.json


Test all endpoints directly via Postman.

🛠️ Tech Stack

Backend: FastAPI, Uvicorn, Python

Frontend: React / Next.js (via npm)

APIs: REST, JSON

Tools: Postman for testing

👤 Author

Munindhar Chandanagiri
