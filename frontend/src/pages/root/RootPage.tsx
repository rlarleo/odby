import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import HeroBanner from '../../section/HeroBanner';
import IntroSection from '../../section/IntroSection';
import VideoSection from '../../section/VideoSection';
import BuySection from '../../section/BuySection';
import FootSection from '../../section/FootSection';
import GallerySection from '../../section/GallerySection';
import TranslateButton from '../../component/Button/TranslateButton'
import { isMobile } from 'react-device-detect';
import '../../App.css';
import NoticeSection from '../../section/NoticeSection';


const RootPage = () => {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return ( 
    <div className="App">
      <div className={ isMobile ? "no_fly" : "fly" }>
        <TranslateButton language={language} setLanguage={setLanguage}/>
      </div>
      <HeroBanner />
      <IntroSection />
      <VideoSection />
      <BuySection />
      <GallerySection />
      <NoticeSection />
      <FootSection />
    </div>);
};

export default RootPage;
