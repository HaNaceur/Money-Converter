import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Currency({ name }) {
  return (
    <li className="currency">{name}</li>
  );
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Currency;
