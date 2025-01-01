import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Tip 1 Diyabet Bilgilendirme ve Teknoloji Platformu</h1>
          <p>Modern teknolojiler ve güncel bilgiler ile diyabet yönetimini kolaylaştırın</p>
          <div className="cta-buttons">
            <Link to="/temel-konular" className="cta-button primary">
              Temel Bilgiler
            </Link>
            <Link to="/teknik-konular" className="cta-button secondary">
              Teknoloji
            </Link>
          </div>
        </div>
      </div>

      <section className="features">
        <div className="container">
          <h2>Platformumuzda Neler Var?</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <i className="fas fa-book-medical"></i>
              <h3>Temel Bilgiler</h3>
              <p>Tip 1 diyabet hakkında kapsamlı bilgi ve yönetim stratejileri</p>
              <Link to="/temel-konular" className="feature-link">Keşfet →</Link>
            </div>
            <div className="feature-card">
              <i className="fas fa-laptop-medical"></i>
              <h3>Teknoloji</h3>
              <p>Modern diyabet teknolojileri ve yenilikçi çözümler</p>
              <Link to="/teknik-konular" className="feature-link">Keşfet →</Link>
            </div>
            <div className="feature-card">
              <i className="fas fa-users"></i>
              <h3>Topluluk</h3>
              <p>Deneyim paylaşımları ve sosyal destek ağı</p>
              <Link to="/sosyal-konular" className="feature-link">Keşfet →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 