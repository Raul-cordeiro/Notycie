import React, { useEffect, useState } from 'react';
import './App.css';
import Compartilhar from './compartilhar.jsx';
import NavBar from './NavBar';

import ShareButton from './compartilhar.jsx';

////https://privacypros.io/tor/best-onion-sites///




function NoticiaCard({ noticia, onShare }) {
  
  return (
    
    <div className="noticia-card">
      <section>
<NavBar /> {/* Incluindo o componente NavBar */}
</section>

         
      <div>
        
        <p className='bem-vindo' >
        Raul Cordeiro Tecnologias</p>
      </div>
      <div>
        <p className='bem-vindo2'> Notícias da BBC de Londres</p>
        
      </div>
        <img className="noticia-image" src={noticia.urlToImage} alt={noticia.title} />
        <h1 className="noticia-title">{noticia.title}</h1>
       
        <h2 className="noticia-description">{noticia.description}</h2>
        <a className="noticia-url" href={noticia.url} target="_blank" rel="noopener noreferrer">
        {noticia.url}
      </a>
      <p className='quality'>Saiba Mais</p>
      <p className='quality'>Oferecemos conteúdo de qualidade sem alienação</p>
      <ShareButton url={noticia.url} />
      


    </div>
  );
}

function Noticia() {
  const [noticias, setNoticias] = useState([]);
  const [showCompartilhar, setShowCompartilhar] = useState(false);
  const [sharedUrl, setSharedUrl] = useState('');
  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apikey = "ffda70369f1f4904b3d227ab8b9e2659";
        //const pais = "pt";//
        const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apikey}`;
        const response = await fetch(url);
        const data = await response.json();
        const noticias = data.articles;
        setNoticias(noticias);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  const handleShare = (url) => {
    setSharedUrl(url);
    setShowCompartilhar(true);
  };

  return (
    <div id='noticias'>
      {noticias.map(noticia => (
        <NoticiaCard key={noticia.title} noticia={noticia} onShare={handleShare} />
      ))}
      {showCompartilhar && <Compartilhar url={sharedUrl} />}
    </div>
  );
}

export default Noticia;
