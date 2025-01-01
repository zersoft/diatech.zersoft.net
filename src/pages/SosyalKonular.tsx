import React from 'react';
import './SosyalKonular.css';

const SosyalKonular: React.FC = () => {
  return (
    <div className="sosyal-konular">
      <h1>Sosyal Konular</h1>
      
      <div className="content-grid">
        <div className="content-card">
          <h2>Günlük Yaşam Deneyimleri</h2>
          <ul>
            <li>Okul Hayatında Diyabet</li>
            <li>İş Yaşamında Diyabet</li>
            <li>Sosyal Aktiviteler</li>
            <li>Spor ve Egzersiz</li>
          </ul>
        </div>

        <div className="content-card">
          <h2>Psikolojik Destek</h2>
          <ul>
            <li>Diyabet ve Ruh Sağlığı</li>
            <li>Stres Yönetimi</li>
            <li>Aile Desteği</li>
            <li>Motivasyon Teknikleri</li>
          </ul>
        </div>

        <div className="content-card">
          <h2>Topluluk ve İletişim</h2>
          <ul>
            <li>Destek Grupları</li>
            <li>Online Topluluklar</li>
            <li>Deneyim Paylaşımları</li>
            <li>Etkinlikler ve Buluşmalar</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SosyalKonular; 