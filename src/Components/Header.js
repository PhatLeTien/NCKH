import React, { useState, useEffect } from 'react';
import '../Style/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faSearch, faEnvelope, faUser, faBars, faTimes, faNewspaper, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Login from './Login';
import { useTranslation } from 'react-i18next';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [editionsOpen, setEditionsOpen] = useState(false);
  const { i18n } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen && loginOpen) {
      setLoginOpen(false);
    }
  };

  const toggleLogin = () => {
    setLoginOpen(!loginOpen);
    if (!loginOpen && menuOpen) {
      setMenuOpen(false);
    }
  };

  const toggleEditions = () => {
    setEditionsOpen(!editionsOpen);
  };

  const handleSendTip = () => {
    window.location.href = 'mailto:your-email@example.com?subject=Tip%20Submission';
  };

  const isBlurred = menuOpen || loginOpen;

  useEffect(() => {
    const setActiveLink = () => {
      const links = document.querySelectorAll('.main-nav a');
      links.forEach(link => {
        if (link.getAttribute('href') === window.location.pathname) {
          link.classList.add('active-link');
        } else {
          link.classList.remove('active-link');
        }
      });
    };

    setActiveLink();
    window.addEventListener('popstate', setActiveLink);
    return () => {
      window.removeEventListener('popstate', setActiveLink);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setEditionsOpen(false);
    setMenuOpen(false); // Close the slide-in menu
    localStorage.setItem('selectedLanguage', lng); // Lưu ngôn ngữ vào localStorage
  };

  return (
    <header className="header">
      <div className="header-top">
        <nav className="top-nav">
          <a href="/">GIZMODO</a>
          <a href="/">JALOPNIK</a>
          <a href="/">KOTAKU</a>
          <a href="/">QUARTZ</a>
          <a href="/">THE ROOT</a>
          <a href="/">THE INVENTORY</a>
        </nav>
      </div>
      <div className={`header-bottom ${isBlurred ? 'blurred' : ''}`}>
        <div className="logo">
          <div className="logo-wrapper">
            <div className="logo-text">PTGAMES</div>
            <div className="logo-subtext">Gaming Reviews, News, Tips and More.</div>
          </div>
        </div>
        <nav className="main-nav">
          <a href="/home">HOME</a>
          <a href="/latest">LATEST</a>
          <a href="/news">NEWS</a>
          <a href="/guides">GUIDES</a>
          <a href="/reviews">REVIEWS</a>
          <a href="/games">GAMES</a>
          <a href="/entertainment">ENTERTAINMENT</a>
          {/* <a href="/">OPINION</a>
          <a href="/">ANIME</a> */}
        </nav>
        <div className="icons">
          <div className="icon-item" onClick={toggleEditions}>
            <FontAwesomeIcon icon={faGlobe} />
            <span>EDITIONS</span>
            <FontAwesomeIcon icon={faChevronDown} className={`arrow-icon ${editionsOpen ? 'open' : ''}`} />
            {editionsOpen && (
              <div className="dropdown-menu show">
                <button onClick={() => changeLanguage('vi')}>Vietnamese</button>
                <button onClick={() => changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('en')}>Australia</button>
              </div>
            )}
          </div>
          <button onClick={() => window.location.href = "/"} className="icon-item">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button onClick={() => window.location.href = "/"} className="icon-item">
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
          <button onClick={toggleLogin} className="icon-item">
            <FontAwesomeIcon icon={faUser} />
          </button>
          <button onClick={toggleMenu} className="icon-item">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
      {menuOpen && (
        <>
          <div className="slide-in-menu open">
            <button className="close-button" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="slide-in-nav">
              <div className="heading">Discover</div>
              <a href="/home">Home</a>
              <a href="/latest">Latest</a>
              <a href="/news">News</a>
              <a href="/guides">Guides</a>
              <a href="/reviews">Reviews</a>
              <a href="/games">Games</a>
              <a href="/entertainment">ENTERTAINMENT</a>
              {/* <a href="/">Opinion</a>
              <a href="/">Anime</a> */}
              <div className="heading">Editions</div>
              <button onClick={() => changeLanguage('vi')}>Vietnamese</button>
              <button onClick={() => changeLanguage('en')}>English</button>
              <button onClick={() => changeLanguage('en')}>Australia</button>
              <div className="heading">More</div>
              <button onClick={toggleLogin} className="button-link">
                <FontAwesomeIcon icon={faUser} className="fa-icon" /> Log In / Sign Up
              </button>
              <button onClick={handleSendTip} >
                <FontAwesomeIcon icon={faEnvelope} className="fa-icon" /> Send us a Tip!
              </button>
              <button onClick={() => window.location.href = "/"} >
                <FontAwesomeIcon icon={faNewspaper} className="fa-icon" /> Subscribe
              </button>
              <div className="heading">Extra</div>
              <a href="/aboutus">About</a>
              <a href="/">Terms of Use</a>
              <div className="heading">Explore our other sites</div>
              <div className="social-icons">
                <a href="/"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="/"><FontAwesomeIcon icon={faYoutube} /></a>
              </div>
              <p>© 2024 G/O Media</p>
            </div>
          </div>
          <div className="overlay open" onClick={toggleMenu}></div>
        </>
      )}
      {loginOpen && (
        <>
          <div className="login-popover">
            <button className="close-button" onClick={toggleLogin}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <Login />
          </div>
          <div className="overlay open" onClick={toggleLogin}></div>
        </>
      )}
    </header>
  );
}

export default Header;
