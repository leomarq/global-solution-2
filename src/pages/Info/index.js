import React, { useState, useEffect } from "react";
import axios from "axios";

const Info = () => {
  const [noticia, setNoticia] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://apinoticias.tedk.com.br/api/?q=agricultura&date=02/06/2023"
        );
        setNoticia(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Notícias</h1>
      {noticia.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {noticia.map((item) => (
            <li key={item.q}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>Published on: {item.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Info;
