import React from 'react';
import './TeknikKonular.css';

const TeknikKonular: React.FC = () => {
  return (
    <div className="teknik-konular">
      <h1>Teknik Konular</h1>
      
      <div className="content-grid">
        <div className="content-section">
          <h2>Yazılım Geliştirme</h2>
          <div className="topic-list">
            <div className="topic-item">Web Geliştirme</div>
            <div className="topic-item">Mobil Uygulama Geliştirme</div>
            <div className="topic-item">Veritabanı Yönetimi</div>
          </div>
        </div>

        <div className="content-section">
          <h2>Sistem ve Ağ</h2>
          <div className="topic-list">
            <div className="topic-item">Ağ Güvenliği</div>
            <div className="topic-item">Sunucu Yönetimi</div>
            <div className="topic-item">Cloud Computing</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeknikKonular; 