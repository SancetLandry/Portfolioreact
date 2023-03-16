import './styles.scss';

import me from 'src/assets/img/me.jpg';

function About() {
  return (
    <div id="about">
      <h2>Qui suis-je ?</h2>
      <div id="about_presentation">
        <div id="about_text" className="color_darkgrey">
          <p>Hello, moi c'est <span className="color_cyan">Landry</span>  ! <br /> <br />  Fort de mon expérience dans le secteur de la relation client et de la vente, j’ai décidé de m’orienter vers un domaine qui m’attire depuis longtemps : <br />  <br />  <span className="color_cyan">Le développement Web.</span>  <br />  <br />  Motivé par cette reconversion, ce nouveau départ est enrichi des connaissances et compétences issues de mes expériences professionnelles passées.

            <br />  <br />  Mon implication, ma persévérance et mon
            savoir-être sont de très bons atouts pour cela.

            <br />  <br />  Les <span className="color_cyan">technologies</span>  avec lequel je travaille :
          </p>
          <ul id="about_technos">
            <li className="about_techno_li">JavaScript</li>
            <li className="about_techno_li">React</li>
            <li className="about_techno_li">Node.js</li>
            <li className="about_techno_li" id="wordpressMoove">SQL</li>
          </ul>
        </div>
        <img id="img" src={me} alt="photoPortfolio" />
      </div>
    </div>
  );
}

// == Export
export default About;
