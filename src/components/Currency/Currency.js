import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Currency({ name, rate, onClick }) {
  return (
    <li
      className="currency"
      onClick={onClick}
    >
      {name}
    </li>
  );
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
};

export default Currency;
