import React, { useEffect } from 'react';
import './App.css';
import Compartilhar from "./Compartilhar.jsx"

function Noticia() {
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apikey = "ffda70369f1f4904b3d227ab8b9e2659";
        const pais = "pt";
        const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apikey}`;
        const response = await fetch(url);
        const data = await response.json();
        const noticias = data.articles;

        noticias.forEach(noticia => {
          const div = (
            <div className="noticia-card">
              <p className="noticia-texto">Texto antes da imagem</p>
              <img className="noticia-image" src={noticia.urlToImage} alt={noticia.title} />
              <h1 className="noticia-title">{noticia.title}</h1>
              <h2 className="noticia-description">{noticia.description}</h2>
              <a className="noticia-url" href={noticia.url}>{noticia.url}</a>
              <Compartilhar />
            </div>
          );

          if (noticia.category === 'esporte') {
            document.getElementById("esportes").appendChild(div);
          } else if (noticia.category === 'política') {
            document.getElementById("politica").appendChild(div);
          } else {
            document.getElementById("outros").appendChild(div);
          }
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div id='noticias'>
      <div id="tecnologia"></div>
      <div id="esportes"></div>
      <div id="politica"></div>
      <div id="outros"></div>
    </div>
  );
}

export default Noticia;
