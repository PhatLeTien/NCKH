import React from 'react';
import '../Style/Footer2.css';

function Footer2() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook" style={{ color: "#3b5998" }}></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter" style={{ color: "#1da1f2" }}></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" style={{ color: "#e4405f" }}></i>
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube" style={{ color: "#ff0000" }}></i>
        </a>
        <a href="https://www.rss.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-rss"></i>
        </a>
      </div>
      <div className="footer-links">
        <a href="/sitemap">Sitemap</a>
        <a href="/about">About</a>
        <a href="/store">Kotaku Store</a>
        <a href="/accessibility">Accessibility</a>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms of Use</a>
        <a href="/advertising">Advertising</a>
        <a href="/jobs">Jobs</a>
        <a href="/reprints">Reprints & Permissions</a>
      </div>
      <div className="footer-network">
        <span>More from our network</span>
        <div className="network-icons">
          <i className="fab fa-google"></i>
          <i className="fab fa-amazon"></i>
          <i className="fab fa-reddit"></i>
          <i className="fab fa-apple"></i>
        </div>
      </div>
      <p>© 2024 G/O Media</p>
    </footer>
  );
}

export default Footer2;
