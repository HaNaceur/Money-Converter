import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Currency from '../Currency/Currency';

function Currencies({ currencies }) {
  return (
    <main className="currencies">
      <div className="currencies-title">Currencies</div>
      <ul className="currencies-list">
        {currencies.map((currency) => (
          <Currency
            key={currency.name}
            name={currency.name}
          />
        ))}
      </ul>
    </main>
  );
}

Currencies.propTypes = {

};

export default Currencies;
