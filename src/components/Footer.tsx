import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <Link to="/">Tip 1 Diyabet Platformu</Link>
      </div>
      <ul className="footer-links">
        <li><Link to="/genel-bilgiler">Genel Bilgiler</Link></li>
        <li><Link to="/teknik-bilgiler">Teknik Bilgiler</Link></li>
        <li><Link to="/teknolojiler">Teknolojiler</Link></li>
        <li><Link to="/gelecek-teknolojiler">Gelecek Teknolojiler</Link></li>
        <li><Link to="/sosyal">Sosyal</Link></li>
      </ul>
    </footer>
  );
};

export default Footer; 