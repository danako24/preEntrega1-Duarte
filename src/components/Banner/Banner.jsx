import React from 'react';
import banner from '../../assets/banner.png';
import './Banner.css';

const Banner = () => {
  return (
    <main className="banner-container">
      <img src={banner} alt="Mudkip Banner" className="banner" />
    </main>
  );
};

export default Banner;
