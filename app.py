from fastapi import FastAPI
from pydantic import BaseModel
from langchain.llms import Ollama

app = FastAPI()
llm = Ollama(model="llama2")

class TextInput(BaseModel):
    text: str

class QuestionInput(BaseModel):
    text: str
    question: str

@app.post("/summarize")
def summarize(data: TextInput):
    prompt = f"Summarize this text:\n\n{data.text}"
    return {"summary": llm(prompt)}

@app.post("/qa")
def qa(data: QuestionInput):
    prompt = f"Answer this question based on context:\n\nContext: {data.text}\nQuestion: {data.question}"
    return {"answer": llm(prompt)}

@app.post("/learning-path")
def learning_path(data: TextInput):
    prompt = f"Create a dynamic learning path for: {data.text}"
    return {"learning_path": llm(prompt)}
