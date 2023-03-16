import './styles.scss';

import LeftBar from 'src/components/LeftBar';
import Header from 'src/components/Header';
import Content from 'src/components/Content';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <LeftBar />
      <Content />
    </div>

  );
}

// == Export
export default App;
