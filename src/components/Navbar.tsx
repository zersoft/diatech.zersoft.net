import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Tip 1 Diyabet
        </Link>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Ana Sayfa
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/temel-konular" className="nav-link" onClick={() => setIsOpen(false)}>
              Temel Bilgiler
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teknik-konular" className="nav-link" onClick={() => setIsOpen(false)}>
              Teknik Konular
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sosyal-konular" className="nav-link" onClick={() => setIsOpen(false)}>
              Sosyal Konular
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gelecek-teknolojiler" className="nav-link" onClick={() => setIsOpen(false)}>
              Gelecek Teknolojiler
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 