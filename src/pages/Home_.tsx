import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

interface SlideImage {
  path: string;
  title: string;
  description: string;
}

const Home: React.FC = () => {
  const [images] = useState<SlideImage[]>([
    {
      path: '/images/slider/slide1.jpg',
      title: 'Tip 1 Diyabet Platformu',
      description: 'Bilgi ve teknoloji ile yaşam kalitesini artırıyoruz'
    },
    {
      path: '/images/slider/slide2.jpg',
      title: 'Diyabet Teknolojileri',
      description: 'En son teknolojik gelişmeler hakkında bilgi edinin'
    },
    {
      path: '/images/slider/slide3.jpg',
      title: 'Topluluk Desteği',
      description: 'Deneyimlerinizi paylaşın ve destek alın'
    }
    // Diğer slider görselleri...
  ]);

  return (
    <div className="home-page">
      <Carousel className="main-slider mb-4">
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 "
              src={image.path}
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption>
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </Carousel.Caption>
          </Carousel.Item> 
        ))}
      </Carousel>

      <div className="container">
        <div className="intro-section">
          <h1>Tip 1 Diyabet Bilgilendirme ve Teknoloji Platformu</h1>
          <p>Tip 1 diyabet hakkında farkındalık, bilgi ve teknoloji platformuna hoş geldiniz.</p>
        </div>
        
        <div className="featured-sections">
          {/* Ana bölümler için kartlar */}
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Genel Bilgiler</h5>
                  <p className="card-text">Tip 1 diyabet hakkında temel bilgiler ve günlük yaşam önerileri.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Teknolojik Gelişmeler</h5>
                  <p className="card-text">Diyabet teknolojilerindeki son gelişmeler ve yenilikler.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Topluluk</h5>
                  <p className="card-text">Deneyim paylaşımları ve sosyal destek ağı.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;