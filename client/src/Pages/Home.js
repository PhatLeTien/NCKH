import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer2';
import HomeContent from '../Components/HomeContent';
import { useTranslation } from 'react-i18next';


function Home() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage);
    } else {
      // Nếu không có ngôn ngữ được lưu, thiết lập ngôn ngữ mặc định ở đây
      i18n.changeLanguage('en'); // Hoặc ngôn ngữ mặc định của bạn
    }
  }, [i18n]);

  return (
    <div className='Home'>
      <Header />
      <HomeContent/>
      <Footer />
    </div>
  );
}

export default Home;
