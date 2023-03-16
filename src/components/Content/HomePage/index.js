import './styles.scss';

function About() {
  return (
    <div className="homePage">

      <h1 className="color_cyan" id="homepage_title">hello world ! Mon nom est :</h1>
      <p className="color_whitegrey" id="font_change">Landry Sancet. <br /> <span className="color_darkgrey">Et si nous faisions du web ?</span> </p>
      <p className="color_darkgrey" id="homepage_description">Bienvenue sur mon portfolio, celui-ci sera amené à évoluer  au fur à mesure <br /> de mon apprentissage. Actuellement en formation  chez O'clock. Je cherche <br /> un poste dès à présent.</p>
      <a className="color1" id="homepage_button" href="#projets">VOIR LES TRAVAUX</a>

    </div>
  );
}

// == Export
export default About;
