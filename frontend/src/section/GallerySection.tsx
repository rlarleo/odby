import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Box, Stack, Button } from '@mui/material';
import '../slider/slick.css';
import '../slider/slick-theme.css';
import { isMobile } from 'react-device-detect';

const GallerySection: React.FC = () => {
  const oddbodyLogo = `${process.env.PUBLIC_URL}/icons/oddbody_logo.png`
  return (
    <div 
      id="3" 
      className="App-gallery-section"
      style={{
        backgroundSize: '100%',
        backgroundImage: `url(${`${process.env.PUBLIC_URL}/images/gallery_back.png`})`,
        backgroundRepeat: 'no-repeat'
      }}
    >
       <div className='Frame-44'>
        <Stack direction="column" sx={{width: '80vw'}}>
       {!isMobile &&
          <Button disabled>
            <img
              src={oddbodyLogo}
              alt=""
              width= { isMobile? "40px" : "80px" }
              style={{paddingRight: isMobile? "10px" : "30px"}}
            />
          </Button>
        }
          <span style={{fontSize: "36px", fontWeight: 'bold', color: 'red'}}>
            Coming Soon
          </span>
          <span style={{fontSize: "16px", fontWeight: 'bold'}}>
            ODBY의 가상 전시장
          </span>
          <span style={{fontSize: "14px", paddingTop: '40px'}}>
            이번 ODD BODY 프로젝트의 작품들은 실제 전시장을 넘어서 온라인 디지털 상의 전시장을 통해서 감상하실 수 있습니다.
          </span>
          <span style={{fontSize: "14px", paddingTop: '20px'}}>
            가상공간 전시장에서의 공간과 시간의 제약을 넘어서 ODBY의 새로운 콘텐츠를 경험해보세요.
          </span>
        </Stack>
      </div>
    </div >
  );
};

export default GallerySection;