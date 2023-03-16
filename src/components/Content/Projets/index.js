import './styles.scss';

import img1 from 'src/assets/img/portfolio-1.png';
import img2 from 'src/assets/img/portfolio-2.png';
import img3 from 'src/assets/img/portfolio-3.png';

function Projets() {
  return (
    <div id="projets" className="projets">
      <h2 className="projets_title">Mes projets en cours / terminés </h2>

      <div className="projets__imgContainer">
        <img className="projets__imgContainer__img" src={img1} alt="portfolio img" />
        <img className="projets__imgContainer__img" src={img2} alt="portfolio img" />
        <img className="projets__imgContainer__img" src={img3} alt="portfolio img" />
        <img className="projets__imgContainer__img" src={img1} alt="portfolio img" />
      </div>
    </div>
  );
}

// == Export
export default Projets;
