import React from 'react';
import '../Style/Footer.css';


const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="social-icons">
                    <span><i className="fa-brands fa-facebook"></i></span>
                    <span><i className="fa-regular fa-envelope"></i></span>
                    <span><i className="fa-brands fa-instagram"></i></span>
                    <span><i className="fa-brands fa-vk"></i></span>
                </div>
                <p>©2024 GamePT. All Rights Reserved | Design by <a href="https://www.facebook.com/letien.phat.712/" className="color-change">Phát Lê</a></p>
            </div>
        </footer>
    );
};

export default Footer;

