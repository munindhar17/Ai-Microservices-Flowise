import { useState } from "react"

export default function App() {
  const [active, setActive] = useState("summarize")
  const [input, setInput] = useState("")
  const [question, setQuestion] = useState("")
  const [output, setOutput] = useState("")

  const callApi = async () => {
    let url = "http://localhost:8000/" + active
    let body = active === "qa" ? { text: input, question } : { text: input }
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
    const data = await res.json()
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">AI Microservices</h1>
      <div className="flex gap-4 mb-4">
        <button onClick={() => setActive("summarize")} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Summarize</button>
        <button onClick={() => setActive("qa")} className="px-4 py-2 bg-green-500 text-white rounded-lg">Q&A</button>
        <button onClick={() => setActive("learning-path")} className="px-4 py-2 bg-purple-500 text-white rounded-lg">Learning Path</button>
      </div>
      <textarea className="w-1/2 p-2 border rounded mb-4" rows="6" value={input} onChange={e => setInput(e.target.value)} placeholder="Enter text..." />
      {active === "qa" && <input className="w-1/2 p-2 border rounded mb-4" placeholder="Enter question" value={question} onChange={e => setQuestion(e.target.value)} />}
      <button onClick={callApi} className="px-6 py-2 bg-black text-white rounded-lg">Submit</button>
      <pre className="w-1/2 bg-white p-4 mt-6 rounded shadow">{output}</pre>
    </div>
  )
}