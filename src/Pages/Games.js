import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer2';
import GamesContent from '../Components/GamesContent';

function Games() {
  return (
    <div className='Home'>
      <Header />
      <GamesContent/>
      <Footer />
    </div>
  );
}

export default Games;