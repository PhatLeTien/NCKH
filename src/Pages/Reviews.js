import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer2';
import ReviewsContentt from '../Components/ReviewsContent';

function Reviews() {
  return (
    <div className='Home'>
      <Header />
      <ReviewsContentt/>
      <Footer />
    </div>
  );
}

export default Reviews;