// Trang Latest
import React from 'react';
import Header from '../Components/Header'; // Import Header
import Footer from '../Components/Footer2'; // Import Footer
import LatestContent from '../Components/LatestContent'; // Import nội dung của trang Latest

function Latest() {
  return (
    <div className="Latest">
      <Header /> {/* Bao gồm Header */}
      <LatestContent /> {/* Nội dung của trang Latest */}
      <Footer /> {/* Bao gồm Footer */}
    </div>
  );
}

export default Latest;
