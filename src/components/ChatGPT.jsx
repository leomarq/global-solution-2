import React, { useState } from 'react';
import axios from 'axios';

export default function ChatGPT() {

    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const HTTP="http://localhost:8020/chat";

    const handleSubmit =(e)=>{
      e.preventDefault();
      axios
      .post(`${HTTP}`, {prompt}).then((res) => setResponse(res.data)).catch(error => {console.log(error)});
    };

    const handlePrompt =(e)=>setPrompt(e.target.value);

  return (
    <div className='conteudo'>
      <h1>chatGPT</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Ask</label>
          <input type="text" value={prompt} onBlur={handlePrompt}/>
        </div>
      </form>
      <div>
        <p>{response ? response : "Pergunte-me qualquer coisa."}</p>
      </div>
    </div>
  )
}
