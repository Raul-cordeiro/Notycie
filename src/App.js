import React, { useEffect } from 'react';
import Tmdb from './tmdb.jsx'; // Substitua 'seuarquivo.js' pelo caminho correto do seu arquivo

export default () => {
  useEffect(() => {
    const loadAll = async () => {
      try {
        let list = await Tmdb.getHomeList(); // Use a função getHomeList do objeto Tmdb
        console.log(list);
      } catch (error) {
        console.error("Erro ao carregar lista:", error);
      }
    };

    loadAll();
  }, []);

  return (
    <div className='page'>
      Header
      Destaques
      Lista
    </div>
  );
}
