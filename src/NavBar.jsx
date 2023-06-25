import React from 'react';

function NavBar() {
  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%' }}>
      <ul className="navbar" style={{ display: 'flex', justifyContent: 'space-between', listStyleType: 'none', margin: 0, padding: 0 }}>
        <li><a href="C:\noticias\notycie\src\App.js">Notícias</a></li>
        <li><a href="https://raulcordeiro.com.br/">Sobre</a></li>
        <li><a href="#contatos">Contatos</a></li>
        <li><a href="#patrocinadores">Patrocinadores</a></li>
        <li><a href="#privacidade">leis de LGPD</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
