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
            {...currency} // on passe tout à Currency, name+rate
          />
        ))}
      </ul>
    </main>
  );
}

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired, // un tableau d'objet, ayant une clé "name" qui est un string qui est requis
};

export default Currencies;