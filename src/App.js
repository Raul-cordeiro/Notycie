import React, { useEffect, useState } from 'react';
import tmdb from './tmdb.jsx';
import MovieRow from './components/MovieRow.jsx'; // Certifique-se de que o caminho do componente está correto

export default () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
        let list = await tmdb.getHomeList();
        setMovieList(list);
        console.log(list)
        
      };

    loadAll();
  }, []);

  return (
    <div className='page'>
      <section className='listas'>
      <MovieRow/>
      </section>
    </div>
  );
}