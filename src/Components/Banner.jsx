import React, { useState, useEffect } from 'react';
import '../styles.css';

const Banner = () => {
  const [bgColor, setBgColor] = useState('#ff0000');

  const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor(getRandomColor());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner" style={{ backgroundColor: bgColor }}>
      <p>Tecnologia y Eficiencia a su Alcance</p>
    </div>
  );
};

export default Banner;

