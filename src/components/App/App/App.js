// == Import
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import data from '../data/currencies';
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
        // title={recipe.footer.title}
        // text={recipe.footer.text}
        // le spread operator remplace les 2 lignes du dessus
        {...recipe.footer} // on spread title+text dans Footer
      />
    </>
  );
}

// == Export
export default App;
