import React, { useState, useEffect, useMemo } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import HeroBanner from './section/HeroBanner';
import IntroSection from './section/IntroSection';
import VideoSection from './section/VideoSection';
import BuySection from './section/BuySection';
import FootSection from './section/FootSection';
import GallerySection from './section/GallerySection';
import './App.css';
import Axios from 'axios';

Axios.defaults.baseURL = process.env.REACT_APP_API_SERVER;
console.log(process.env.REACT_APP_API_SERVER)
function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="App">
      <HeroBanner />
      <IntroSection />
      <VideoSection />
      <BuySection />
      <GallerySection />
      <FootSection />
    </div>
  );
}

export default App;