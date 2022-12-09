import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Currency from '../Currency/Currency';

function Currencies({ currencies, onCurrencyClick }) {
  return (
    <main className="currencies">
      <div className="currencies-title">Currencies</div>
      <ul className="currencies-list">
        {currencies.map((currency) => (
          <Currency
            key={currency.id}
            // le onClick est envoyé dans le ...rest du Currency
            onClick={() => {
              // on appel la callback de App en lui passant Currency
              onCurrencyClick(currency);
            }}
            name={currency.name}
          />
        ))}
      </ul>
    </main>
  );
}

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired, // un tableau d'objet, ayant une clé "name" qui est un string qui est requis
};

export default Currencies;

