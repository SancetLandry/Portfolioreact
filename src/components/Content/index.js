import './styles.scss';

import HomePage from './HomePage';
import About from './About';
import Etudes from './Etudes';
import Projets from './Projets';
import Contact from './Contact';

function Content() {
  return (
    <div className="Content">
      <div className="Content__Container">
        <HomePage />
        <About />
        <Etudes />
        <Projets />
        <Contact />
      </div>

    </div>

  );
}

// == Export
export default Content;
