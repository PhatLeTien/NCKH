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
import Games from './Pages/Games';
import Entertainment from './Pages/Entertainment';

import Login from './Components/Login';
import Signup from './Components/Signup';

import DetailHome from './DetailContent/DetailHome';
import DetailLatest from './DetailContent/DetailLatest';
import DetailGames from './DetailContent/DetailGames';
import DetailNews from './DetailContent/DetailNews';
import DetailGuides from './DetailContent/DetailGuides';
import DetailReviews from './DetailContent/DetailReviews';

import LoginPage from './Admin2/LoginPage';
import DashboardPage from './Admin2/DashboardPage';


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
          <Route path="/games" element={<Games />} />
          <Route path="/entertainment" element={<Entertainment/>} />
          <Route path="/home/article/:id" element={<DetailHome/>} />
          <Route path="/latest/article/:id" element={<DetailLatest />} />
          <Route path="/games/article/:id" element={<DetailGames />} />
          <Route path="/news/article/:id" element={<DetailNews/>} />
          <Route path="/guides/article/:id" element={<DetailGuides />} />
          <Route path="/reviews/article/:id" element={<DetailReviews />} />
          <Route path="/admin-2" element={<DashboardPage />} />
          <Route path="/login-admin" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
