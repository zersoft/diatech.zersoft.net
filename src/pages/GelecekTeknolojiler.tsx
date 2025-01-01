import React from 'react';
import './GelecekTeknolojiler.css';

const GelecekTeknolojiler: React.FC = () => {
  return (
    <div className="gelecek-teknolojiler">
      <h1>Gelecek Teknolojiler</h1>
      
      <div className="content-grid">
        <div className="content-card">
          <h2>Yapay Pankreas Sistemleri</h2>
          <ul>
            <li>Kapalı Döngü Sistemler</li>
            <li>Akıllı İnsülin Pompaları</li>
            <li>Sürekli Glikoz Takibi</li>
            <li>Otomatik Doz Ayarlama</li>
          </ul>
        </div>

        <div className="content-card">
          <h2>Biyoteknolojik Gelişmeler</h2>
          <ul>
            <li>Kök Hücre Araştırmaları</li>
            <li>Gen Tedavisi</li>
            <li>İmmünoterapi</li>
            <li>Beta Hücre Yenilenmesi</li>
          </ul>
        </div>

        <div className="content-card">
          <h2>Yapay Zeka Uygulamaları</h2>
          <ul>
            <li>Akıllı Diyabet Asistanları</li>
            <li>Prediktif Analiz</li>
            <li>Kişiselleştirilmiş Tedavi</li>
            <li>Veri Analizi ve Öğrenme</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GelecekTeknolojiler; 