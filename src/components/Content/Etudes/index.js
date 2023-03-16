import './styles.scss';

function Etudes() {
  return (
    <div id="etudes">
      <h2> Les formations que j'ai suivi</h2>
      <div id="etudes_cards">
        <div className="etudes_card_params">

          <h3 className="color_whitegrey"><span className="color_cyan">Fullstack JavaScript & Spé React </span>&nbsp;  - &nbsp; O'clock&nbsp;  - &nbsp; Paris</h3>
          <p className="color_darkgrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget felis vel ligula convallis ornare. Phasellus quis elementum arcu, ut fringilla elit. </p>
        </div>
        <div className="etudes_card_params">

          <h3 className="color_whitegrey"><span className="color_cyan">BTS Negociation et Relation Client </span> &nbsp; - &nbsp;ESUPEC&nbsp; -&nbsp; Cholet</h3>
          <p className="color_darkgrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget felis vel ligula convallis ornare. Phasellus quis elementum arcu, ut fringilla elit. </p>
        </div>
        <div className="etudes_card_params">

          <h3 className="color_whitegrey"><span className="color_cyan">BAC ES </span>&nbsp; -&nbsp; Lycée du Pays de Retz&nbsp;-&nbsp; Pornic</h3>
          <p className="color_darkgrey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget felis vel ligula convallis ornare. Phasellus quis elementum arcu, ut fringilla elit.  </p>
        </div>
      </div>
    </div>
  );
}

// == Export
export default Etudes;
