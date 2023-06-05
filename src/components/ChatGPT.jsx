import React, { useState } from "react";
import axios from "axios";

export default function ChatGPT() {

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const HTTP = "http://localhost:8080/chat";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${HTTP}`, { prompt })
      .then((res) => {
        setResponse(res.data);
        console.log(prompt);
      })
      .catch((error) => {
        console.log(error);
      });

    setPrompt("");
  };

    const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className='conteudo'>
      <h1>IA</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pergunta: </label>
          <input type="text" placeholder="Digite sua pergunta..." value={prompt} onChange={handlePrompt}/>
        </div>
      </form>
      <div>
        <p>{response ? response : "..."}</p>
      </div>
    </div>
  );
}
