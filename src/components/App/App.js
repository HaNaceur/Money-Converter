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
      selectedCurrencyId: data[0].id,
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

  selectCurrency = (currency) => {
    this.setState({ selectedCurrencyId: currency.id });
  };

  getSelectedCurrency = () => {
    const { currencies, selectedCurrencyId } = this.state;
    return currencies.find((currency) => currency.id === selectedCurrencyId);
  };

  render() {
    const {
      baseAmount,
      showCurrenciesList,
      currencies,
    } = this.state;

    const selectedCurrency = this.getSelectedCurrency();
    const calculatedSelectedRate = roundAtDecimal(selectedCurrency.rate * baseAmount, 2);

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
            onCurrencyClick={this.selectCurrency}
          />
        )}
        <Amount
          value={calculatedSelectedRate}
          currency={selectedCurrency.name}
        />
      </div>
    );
  }
}

// == Export
export default App;