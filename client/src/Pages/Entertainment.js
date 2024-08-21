import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer2';
import EntertainmentContent from '../Components/EntertainmentContent';

function Entertainment() {
  return (
    <div className='Home'>
      <Header />
      <EntertainmentContent/>
      <Footer />
    </div>
  );
}

export default Entertainment;