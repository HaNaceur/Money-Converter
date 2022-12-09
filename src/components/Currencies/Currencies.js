import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Currency from '../Currency/Currency';

class Currencies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  getFilteredCurrencies = () => {
    const { currencies } = this.props;
    const { searchValue } = this.state;

    const filteredCurrencies = currencies.filter((currency) => {
      // on met tout en minuscule et on trim (on vire les espaces devant et derrière)
      const searchValueCleaned = searchValue.trim().toLowerCase();
      const currencyNameCleaned = currency.name.toLowerCase();

      // si c'est vide on retourne tout
      if (!searchValueCleaned) {
        return true;
      }
      // on retourne true si le currency.name contient le searchValue
      return currencyNameCleaned.includes(searchValueCleaned);
    });
    return filteredCurrencies;
  };

  render() {
    const { onCurrencyClick } = this.props;
    const { searchValue } = this.state;

    const filteredCurrencies = this.getFilteredCurrencies();

    return (
      <main className="currencies">
        <div className="currencies-search">
          <input
            type="text"
            className="currencies-search-input"
            placeholder="Search currency..."
            value={searchValue} // on le set depuis le state (lien descendant)
            onChange={(event) => {
              const inputValue = event.target.value;
              this.setState({ searchValue: inputValue }); // on modifie le state sur le onChange (le lien montant)
            }}
          />
        </div>
        <ul className="currencies-list">
          {filteredCurrencies.map((currency) => (
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
}

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired, // un tableau d'objet, ayant une clé "name" qui est un string qui est requis
  onCurrencyClick: PropTypes.func.isRequired,
};

export default Currencies;
