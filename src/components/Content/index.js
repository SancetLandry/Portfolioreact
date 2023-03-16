import './styles.scss';

import HomePage from './HomePage';
import About from './About';
import Etudes from './Etudes';
import Projets from './Projets';

function Content() {
  return (
    <div className="Content">
      <div className="Content__Container">
        <HomePage />
        <About />
        <Etudes />
        <Projets />
      </div>

    </div>

  );
}

// == Export
export default Content;
