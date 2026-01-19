import React, { useState } from 'react';
import '../styles.css';

const Gallery = () => {
  const images1 = [
    'https://easyit.pt/images/2024/ti-quotidiano/20240329-futuristic-image-that-contrasts-a-desktop-computer-and-a-laptop.webp',
    'https://learnexcel.io/wp-content/uploads/2024/04/6166-open-xlsb-file-640x360.png',
    'https://erp-management.de/wp-content/uploads/2024/01/stylized-representation-of-a-computer-with-a-keybo.jpg'
  ];

  const images2 = [
    'https://www.numereeks.com/wp-content/uploads/2025/01/Comment-telecharger-une-image-ISO-de-Windows-7-facilement.png',
    'https://learnexcel.io/wp-content/uploads/2024/03/3126-filter-data-excel-768x439.png',
    'https://learnexcel.io/wp-content/uploads/2024/04/209-extract-data-website-excel-automatically-768x439.png'
  ];

  const [gallery, setGallery] = useState(images1);

  const toggleGallery = () => {
    setGallery(gallery === images1 ? images2 : images1);
  };

  return (
    <div className="gallery-container">
      
      <h2 className="gallery-title">Mi Galeria!</h2>

      
      <div className="gallery">
        {gallery.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Imagen ${index}`}
            className="gallery-img"
            onClick={toggleGallery}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;