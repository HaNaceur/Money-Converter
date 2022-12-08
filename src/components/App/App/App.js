// == Import
import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';
import data from '../../data/currencies';

import './styles.scss';

function App() {
  return (
    <div className="app">
      <Header baseAmount={1} />
      <Currencies currencies={data} />
      <Amount />
    </div>
  );
}

// == Export
export default App;