import React, { useState, useEffect } from 'react';
import { Box, Stack, Button } from '@mui/material';
import OpenSeaButton from '../component/Button/OpenSeaButton';
import { isMobile } from 'react-device-detect';
import GallerySection from '../section/GallerySection';

const BuySection: React.FC = () => {
  const [scroll, setScroll] = useState(false);
  const oddbodyLogo = `${process.env.PUBLIC_URL}/icons/ticket.svg`

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
  // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if(window.scrollY >= 500){
      setScroll(true);
      console.log(scroll)
    }else{
    // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
    }

  };

  function handleOpensea() {
    window.location.href = "https://opensea.io/ODBY";
  }

  return (
    <div 
      className="App-section"
      style={{
        // backgroundSize: '100%',
        // backgroundImage: `url(${`${process.env.PUBLIC_URL}/images/TwitterButton.png`})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundAttachment: 'fixed'
      }}
    >
        {!isMobile &&
        <Button
          onClick={handleOpensea}
        >
          <Stack 
            style={{
              height: '350px',
              width: '100vh',
              backgroundImage: `url(${`${process.env.PUBLIC_URL}/images/ticket.svg`})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          >
          </Stack>
        </Button>
      }
      <Stack
        sx={{padding: isMobile? 10 : 10, width: '60vw'}}
      >
        <span 
          className="-ODBYODD-BODY-"
          data-aos="fade-up"
          data-aos-delay="50" 
        >
          <span style={{color: '#bbbbbb'}}>인간의 영혼과 마음은 몸이라는 구조로부터 독단적으로 떨어져나올 수 없다. ‘ODBY(ODD BODY)’는 우리가 당연하게 생각하고 바라보고 사용해온</span> 
          ‘신체’를 뒤틀고 변화시키며 발현되는 이미지를 통해 관객들에게 일상의 현상과 기존의 대상을 새롭게 이해하는 시각
          <span style={{color: '#bbbbbb'}}>을 제시하고자 한다.</span> <br />< br />
          <span style={{color: '#bbbbbb'}}>ODBY(ODD BODY)는 각 개인의 생애를 함께하는 ‘몸’을 시각적인 뒤틀어짐의 현상으로 실제와 판타지 사이의 괴리를 만들고자 한다. </span>
          궁극적으로 이를 바라보는 개인의 삶이 영역으로 이를 끌어와 앞으로 그들의 삶에서 경험하게 되는 것
          <span style={{color: '#bbbbbb'}}>들을 받아들이는데 있어 다양한 관점을 제안한다.</span> <br />< br />
          <span style={{color: '#bbbbbb'}}>‘ODBY(ODD BODY)’는 무용 예술이 블록체인 미디어에서 활동할 가능성을 확인하며 관객과 공연장에서만 맺어진</span> 
          제한적인 관계에서 벗어나 온라인 매체에서 또한 유동적
          <span style={{color: '#bbbbbb'}}>인 관계를 맺을 수 있길 희망한다.</span>
        </span>
      </Stack>
    </div >
  );
};

export default BuySection;