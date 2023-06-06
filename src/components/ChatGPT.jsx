import React, { useState } from "react";
import axios from "axios";

// Professor, veja a imagem erro.gpt em /public/images. Como vc pode ver, o código está funcionando normalmente, porém não conseguimos fazer essa parte de integração IA pois meu plano grátis pra utilização da API do ChatGPT expirou e eu teria que pagar (em dólar) pra ter essa funcionalidade no site

export default function ChatGPT() {

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const HTTP = "http://localhost:8020/chat";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${HTTP}`, { prompt }).then((res) => setResponse(res.data)).catch((error) => {console.log(error);});
    };

    const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div className='conteudo'>
      <h2>Tire suas dúvidas!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" className="input-ia" placeholder="Digite sua pergunta..." value={prompt} onChange={handlePrompt}/>
        </div>
      </form>
      <div>
        <p>{response ? response : "."}</p>
      </div>
    </div>
  );
}
