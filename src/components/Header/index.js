import { useState } from 'react';
import './styles.scss';

import logo from 'src/assets/img/logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="container">
      <nav id="navbar">
        <div id="navbar_logo">
          <a className="" href="/"><img id="navbar_logoParams" src={logo} alt="logo Landry" /></a>
        </div>
        <div id="burger-container" onClick={toggleMenu}>
          <div id="burger" className={menuOpen ? 'open' : ''}>
            <span />
            <span />
            <span />
          </div>
        </div>
        <ol id="navbar_containerItems" className={menuOpen ? 'open' : ''}>
          <li className="navbar_items"><a className="navbar_itemsStyle" href="#about">A propos</a></li>
          <li className="navbar_items"><a className="navbar_itemsStyle" href="#etudes">Etudes</a></li>
          <li className="navbar_items"><a className="navbar_itemsStyle" href="#projets">Projets</a></li>
          <li className="navbar_items"><a className="navbar_itemsStyle" href="#contact">Contact</a></li>
        </ol>
        <div id="navbar_itemsButton">
          <a className="navbar_itemsCV" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Curriculum</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
