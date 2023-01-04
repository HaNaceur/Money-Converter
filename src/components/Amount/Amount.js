import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Amount({ value, currency }) {
  return (
    <footer className="amount">
      <p className="amount-value">{value}</p>
      <p className="amount-currency">{currency}</p>
    </footer>
  );
}

Amount.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Amount;