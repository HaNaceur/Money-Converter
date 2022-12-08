import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Currencies({}) {
  return (
    <main className="currencies">
      <div className="currencies-title">Currencies</div>
      <ul className="currencies-list">
        <li className="currency">Australian Dollar</li>
        <li className="currency">Bulgarian Lev</li>
        <li className="currency">Brazilian Real</li>
        <li className="currency">Canadian Dollar</li>
        <li className="currency">Swiss Franc</li>
        <li className="currency">Chinese Renminbi Yuan</li>
        <li className="currency">Czech Koruna'</li>
      </ul>
    </main>
  );
}

Currencies.propTypes = {

};

export default Currencies;