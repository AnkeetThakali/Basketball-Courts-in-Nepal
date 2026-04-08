import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CourtDetail from './components/detailpage';
import './Home.css'
import Basketball from './pages/basketball/basketball';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basketball" element={<Basketball />} />
        <Route path="/futsal" element={<Home />} />
        <Route path="/badminton" element={<Home />} />
        <Route path="/others" element={<Home />} />
        <Route path="/court/:id" element={<CourtDetail />} />
      </Routes>
    </Router>
);