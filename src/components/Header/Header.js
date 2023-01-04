import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Header({
  baseAmount,
  onIncrement,
  onDecrement,
  showCurrenciesList,
  onToggle,
}) {
  return (
    <header className="header">
      <button
        className={`toggle-btn ${showCurrenciesList ? 'open' : 'close'}`}
        type="button"
        onClick={onToggle}
      >
        -
      </button>
      <h1 className="header-title">Converter</h1>
      <p className="header-amount">
        <button
          type="button"
          onClick={onDecrement} // equivaut à onClick={() => onDecrement()}
          className="header-amount-btn"
        >
          -
        </button>
        <span className="header-amount-text">
          {baseAmount} euro{baseAmount > 1 && 's'}
          {/*
            ici soit on affiche 's' soit on a false et du coup ca n'affiche rien.
            C'est comme si on avait {baseAmount <= 1 ? 'euro' : 'euros'}
          */}
        </span>
        <button
          type="button"
          onClick={() => onIncrement()}
          className="header-amount-btn"
        >
          +
        </button>
      </p>
    </header>
  );
}

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  showCurrenciesList: PropTypes.bool.isRequired,
};

export default Header;