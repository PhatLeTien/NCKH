import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer2';
import NewsContent from '../Components/NewsCotent';

function News() {
  return (
    <div className='Home'>
      <Header />
      <NewsContent/>
      <Footer />
    </div>
  );
}

export default News;