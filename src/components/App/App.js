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

    this.state = {
      baseAmount: 1,
      currencies: data,
      selected: {
        name: 'Australian Dollar',
        rate: 1.09,
      },
    };
  }

  render() {
    return (
      <div className="app">
        <Header
          baseAmount={this.state.baseAmount}
          onIncrement={() => {
            this.setState((oldState) => ({
              baseAmount: oldState.baseAmount + 1,
            }));
          }}
          onDecrement={() => {
            this.setState((oldState) => ({
              baseAmount: oldState.baseAmount - 1,
            }));
          }}
        />
        <Currencies currencies={this.state.currencies} />
        <Amount
          value={Math.round(this.state.selected.rate * this.state.baseAmount, 2)}
          currency={this.state.selected.name}
        />
      </div>
    );
  }
}

// == Export
export default App;
