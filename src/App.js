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
          
          const div = document.createElement('div');
          div.className = 'noticia-card';

          const img = document.createElement('img');
          img.className = 'noticia-image';
          img.src = noticia.urlToImage;

          const h1 = document.createElement('h1');
          h1.className = 'noticia-title';
          h1.textContent = noticia.title;

          const h2 = document.createElement('h2');
          h2.className = 'noticia-description';
          h2.textContent = noticia.description;

          const a = document.createElement('a');
          a.className = 'noticia-url';
          a.href = noticia.url;
          a.textContent = noticia.url;
          <Compartilhar/>

          div.appendChild(img);
          div.appendChild(h1);
          div.appendChild(h2);
          div.appendChild(a);

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
