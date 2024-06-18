import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer2';
import HomeContent from '../Components/HomeContent';

function Home() {
  return (
    <div className='Home'>
      <Header />
      <HomeContent/>
      <Footer />
    </div>
  );
}

export default Home;
