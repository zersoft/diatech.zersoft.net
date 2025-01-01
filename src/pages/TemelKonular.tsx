import React from 'react';
import './TemelKonular.css';

const TemelKonular: React.FC = () => {
  return (
    <div className="temel-konular">
      <h1>Genel Bilgiler</h1>
      
      <section className="info-section">
        <h2>Tip 1 Diyabet Nedir?</h2>
        <div className="content">
          <p>Tip 1 diyabet, pankreasın insülin üretememesi sonucu ortaya çıkan kronik bir hastalıktır.</p>
          <ul>
            <li>Otoimmün bir hastalıktır</li>
            <li>Genellikle çocukluk veya genç yetişkinlik döneminde başlar</li>
            <li>İnsülin tedavisi gerektirir</li>
          </ul>
        </div>
      </section>

      <section className="info-section">
        <h2>Semptomlar ve Teşhis</h2>
        <div className="content">
          <h3>Yaygın Semptomlar</h3>
          <ul>
            <li>Sık idrara çıkma</li>
            <li>Aşırı susama</li>
            <li>Açlık hissi</li>
            <li>Kilo kaybı</li>
            <li>Yorgunluk</li>
          </ul>
        </div>
      </section>

      <section className="info-section">
        <h2>Günlük Yaşam Yönetimi</h2>
        <div className="content">
          <ul>
            <li>Kan şekeri takibi</li>
            <li>İnsülin kullanımı</li>
            <li>Beslenme planı</li>
            <li>Fiziksel aktivite</li>
            <li>Düzenli sağlık kontrolleri</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TemelKonular; 