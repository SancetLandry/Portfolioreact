import './styles.scss';

import LeftBar from 'src/components/LeftBar';
import Header from 'src/components/Header';
import Content from 'src/components/Content';
import Footer from 'src/components/Footer';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <LeftBar />
      <Content />
      <Footer />
    </div>

  );
}

// == Export
export default App;
