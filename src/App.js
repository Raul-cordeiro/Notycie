import React, { useEffect } from 'react';
import tmdb from './tmdb.jsx'; // Substitua 'seuarquivo.js' pelo caminho correto do seu arquivo

export default () => {
  
  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList(); // Use a função getHomeList do objeto Tmdb
      setMovieList(list);
      
    };

    loadAll();
  }, []);

  return (
    <div className='page'>
      <section className='listas'>
        {movieList.map((item,key)=>(
          <div>
            {item.title}
          </div>

        ))}
      </section>
      
    </div>
  );
}
