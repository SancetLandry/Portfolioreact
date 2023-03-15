import './styles.scss';

import github from 'src/assets/img/github.png';
import instagram from 'src/assets/img/instagram.png';
import linkedin from 'src/assets/img/linkedin.png';
import twitter from 'src/assets/img/twitter.png';

function LeftBar() {
  return (
    <div className="leftbar">
      <ol id="leftbar_containerItems">
        <li className="leftbar_items"><a className="leftbar_itemsStyle" href="https://www.linkedin.com/in/landrysancet/" target="_blank" rel="noreferrer"> <img src={linkedin} alt="linkedin logo" /> </a></li>
        <li className="leftbar_items"><a className="leftbar_itemsStyle" href="https://twitter.com/Landry_sct" target="_blank" rel="noreferrer"> <img src={twitter} alt="twitter logo" /> </a></li>
        <li className="leftbar_items"><a className="leftbar_itemsStyle" href="https://github.com/SancetLandry" target="_blank" rel="noreferrer"> <img src={github} alt="github logo" /> </a></li>
        <li className="leftbar_items" id="leftbar_border"><a className="leftbar_itemsStyle" href="https://www.instagram.com/landry_sct/" target="_blank" rel="noreferrer"> <img src={instagram} alt="instagram logo" /> </a></li>
      </ol>
    </div>
  );
}

// == Export
export default LeftBar;
