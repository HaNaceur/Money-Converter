/* eslint-disable react/prefer-stateless-function */
// == Import
import React from 'react';
import Header from '../Header/Header';
import Currencies from '../Currencies/Currencies';
import Amount from '../Amount/Amount';

import { roundAtDecimal } from '../../tools';

import data from '../../data/currencies';

import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props); // très important - on appelle le constructeur de React.Component en lui passant les props

    this.state = {
      showCurrenciesList: true,
      baseAmount: 1,
      currencies: data,
      selected: {
        name: 'Australian Dollar',
        rate: 1.09,
      },
    };
  }

  handleDecrement = () => {
    this.setState((oldState) => ({
      baseAmount: oldState.baseAmount - 1,
    }));
  };

  handleIncrement = () => {
    this.setState((oldState) => ({
      baseAmount: oldState.baseAmount + 1,
    }));
  };

  handleToggleCurrenciesList = () => {
    this.setState((oldState) => ({
      showCurrenciesList: !oldState.showCurrenciesList,
    }));
  };

  render() {
    const {
      baseAmount,
      showCurrenciesList,
      currencies,
      selected,
    } = this.state;

    const calculatedSelectedRate = roundAtDecimal(selected.rate * baseAmount, 2);

    return (
      <div className="app">
        <Header
          baseAmount={baseAmount}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}

          showCurrenciesList={showCurrenciesList}
          onToggle={this.handleToggleCurrenciesList}
        />
        {showCurrenciesList && (
          <Currencies
            currencies={currencies}
            onCurrencyClick={(currency) => {
              console.log('click sur currency dans App', currency);
              this.setState({ selected: currency });
            }}
          />
        )}
        <Amount
          value={calculatedSelectedRate}
          currency={selected.name}
        />
      </div>
    );
  }
}

// == Export
export default App;

