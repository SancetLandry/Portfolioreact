import './styles.scss';

function Etudes() {
  return (
    <div id="etudes">
      <h2> Les formations que j'ai suivi</h2>
      <div id="etudes_cards">
        <div className="etudes_card_params">

          <h3 className="color_whitegrey"><span className="color_cyan">Fullstack JavaScript & Spé React </span>&nbsp;  - &nbsp; O'clock&nbsp;  - &nbsp; Paris</h3>
          <p className="color_darkgrey"> ● 6 mois – 798 heures intensives de formation.<br /> <br /> ● 4 mois de socle : JavaScript & postgreSQL | express, node.js, sequelize.. <br /> <br /> ● 1 mois de spécialisation : React. & Redux | WebPack, Babel, ReactDom, JSX, Jest..<br /> <br /> ● 1 mois de projet en équipe en conditions réelles. </p>
        </div>
        <div className="etudes_card_params">

          <h3 className="color_whitegrey"><span className="color_cyan">BTS Negociation et Relation Client </span> &nbsp; - &nbsp;ESUPEC&nbsp; -&nbsp; Cholet</h3>
          <p className="color_darkgrey">● 2 ans – 870 heures de formation / an. <br /> <br />  ● Démarchage et fidélisation de la clientèle.<br /><br />   ● Production de l’information commerciale.<br /> <br />   ● Organisation et management des équipes.
          </p>
        </div>
        <div className="etudes_card_params">

          <h3 className="color_whitegrey"><span className="color_cyan">BAC ES </span>&nbsp; -&nbsp; Lycée du Pays de Retz&nbsp;-&nbsp; Pornic</h3>
          <p className="color_darkgrey">● Economique et Social </p>
        </div>
      </div>
    </div>
  );
}

// == Export
export default Etudes;
