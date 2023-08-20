import React, { useEffect } from 'react';
import Tmdb from './tmdb'; // Importe o módulo Tmdb corretamente

export default () => {
  useEffect(() => {
    const loadAll = async () => {
      try {
        let list = await Tmdb.getHomeList(); // Use a função getHomeList do módulo Tmdb
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
