// == Import
import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';
import data from '../../data/currencies';

import './styles.scss';

function App() {
  const state = {
    baseAmount: 1,
    currencies: data,
    selected: {
      name: 'Australian Dollar',
      rate: 1.09,
    },
  };

  return (
    <div className="app">
      <Header baseAmount={state.baseAmount} />
      <Currencies currencies={state.currencies} />
      <Amount value={state.selected.rate} currency={state.selected.name} />
    </div>
  );
}

// == Export
export default App;
