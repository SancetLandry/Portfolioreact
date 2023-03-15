import './styles.scss';

import logo from 'src/assets/img/logo.png';

function Header() {
  return (
    <header className="container">
      <nav id="navbar">
        <div id="navbar_logo">
          <a className="" href="/"><img id="navbar_logoParams" src={logo} alt="logo Landry" /></a>
        </div>
        <ol id="navbar_containerItems">
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

// == Export
export default Header;
