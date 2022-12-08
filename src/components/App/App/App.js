// == Import
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import '../data/currencies';
import './styles.scss';
import currencies from '../data/currencies';

function App() {
  const converter = {
    title: 'Converter',
    subtitle: '1 euro',

    currencies: [{
       name, rate
    }
    ],
    footer: {
      title: {currencies.rate},
      text: {currencies.name},
    },
  };

  return (
    <>
      <Header
        title={converter.title}
        topTitle={<p>Money Converter</p>}
        id="header"
        data-bidule="foobar"
      >

        <p>{converter.subtitle}</p>
      </Header>
      <Main
        currencies={converter.name}
      />
      <Footer

        {...converter.footer}
      />
    </>
  );
}


export default App;
