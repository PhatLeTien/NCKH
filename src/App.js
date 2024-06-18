import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Intro from './Pages/Intro';
import Home from './Pages/Home';
import Latest from './Pages/Latest';
import About from './Pages/About';
import News from './Pages/News';
import Guides from './Pages/Guides';
import Reviews from './Pages/Reviews';
import Login from './Components/Login';
import Signup from './Components/Signup';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
