import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TemelKonular from './pages/TemelKonular';
import TeknikKonular from './pages/TeknikKonular';
import SosyalKonular from './pages/SosyalKonular';
import GelecekTeknolojiler from './pages/GelecekTeknolojiler';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/temel-konular" element={<TemelKonular />} />
            <Route path="/teknik-konular" element={<TeknikKonular />} />
            <Route path="/sosyal-konular" element={<SosyalKonular />} />
            <Route path="/gelecek-teknolojiler" element={<GelecekTeknolojiler />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;