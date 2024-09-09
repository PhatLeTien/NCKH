// src/About.js
import React from 'react';
import '../Style/AboutUs.css'; // We'll create this CSS file next

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <span className="about-us">ABOUT US</span>
      </header>
      <h1>What's a <i>PTGAMES?</i> Who Works Here?</h1>
      <div className="logo-container">
        <img src="https://via.placeholder.com/800x450.png?text=Kotaku" alt="Kotaku Logo" />
        <span>Image: Kotaku</span>
      </div>
      <p className="about-content">
        Thank you for reading <i>Kotaku</i>, a news and opinion site about games and things serious gamers care about. We’re here to inform you and, sometimes, entertain you. We also often write about pop culture topics like anime, TV, and movies: if it’s good, interesting, or inspires us somehow, we want to tell you about it.<br /><br />

        We aim to be an inclusive site for gamers of any ethnicity, gender or sexual orientation. We expect our writers and commenters to treat those they write about as they would if they met them in person. Not mistaking honesty with cruelty, approaching everything with good faith, and affording people grace are paramount to creating a good culture within this site. You might also be interested in G/O Media’s Editorial Code, <u>which you can read here.</u><br /><br />

        <b className="news-scoops">We crave news. We want scoops! So, please, tip your editors by emailing: <u>tips@kotaku.com</u></b>
      </p>
      <p className="about-editor">Managing Editor: Le Tien Phat, <u><a href="/">Email</a></u> | <u><a href="/">Twitter</a></u></p>
      <p className="about-editor">Managing Editor: Tran Huynh Thuc, <u><a href="/">Email</a></u> | <u><a href="/">Twitter</a></u></p>
      <h3>Subcribe</h3>
      <p className="about-follow">Follow <i>PTGAMES</i> on: <u><a href="/">Twitter</a></u> <u><a href="/">Facebook</a></u> RSS: <u><a href="/">Excerpt Feed</a></u></p>
    </div>
  );
};

export default About;
