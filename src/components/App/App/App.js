// == Import
import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';

import './styles.scss';

function App() {
  return (
    <div className="app">
      <Header baseAmount={1}/>
      <Currencies />
      <Amount />
    </div>
  );
}

// == Export
export default App;
