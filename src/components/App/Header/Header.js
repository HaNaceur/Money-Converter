import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Header({}) {
  return (
    <header className="header">
      <h1 className="header-title">Converter</h1>
      <p className="header-amount">1 euro</p>
    </header>
  );
}

Header.propTypes = {

};

export default Header;
