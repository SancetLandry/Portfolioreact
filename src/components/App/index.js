import './styles.scss';

import LeftBar from 'src/components/LeftBar';
import Header from 'src/components/Header';
import About from 'src/components/About';
import HomePage from 'src/components/HomePage';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <LeftBar />
      <HomePage />
      <About />
    </div>

  );
}

// == Export
export default App;
