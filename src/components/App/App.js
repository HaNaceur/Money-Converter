/* eslint-disable react/prefer-stateless-function */
// == Import
import React from 'react';
import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';
import data from '../../data/currencies';

import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props); // très important - on appelle le constructeur de React.Component en lui passant les props

    this.data = {
      baseAmount: 1,
      currencies: data,
      selected: {
        name: 'Australian Dollar',
        rate: 1.09,
      },
    };
  }

  render() {
    const state = this.data;

    return (
      <div className="app">
        <Header baseAmount={state.baseAmount} />
        <Currencies currencies={state.currencies} />
        <Amount value={state.selected.rate} currency={state.selected.name} />
      </div>
    );
  }
}

// == Export
export default App;
