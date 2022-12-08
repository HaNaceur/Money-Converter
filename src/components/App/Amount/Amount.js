import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Amount({}) {
  return (
    <footer className="amount">
      <p className="amount-value">1.09</p>
      <p className="amount-currency">Australian Dollar</p>
    </footer>
  );
}

Amount.propTypes = {

};

export default Amount;