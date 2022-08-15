import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Box, Paper, Stack } from '@mui/material';
import '../slider/slick.css';
import '../slider/slick-theme.css';
import Slider from 'react-slick';

const GallerySection: React.FC = () => {
  return (
    <div id="3" className="App-video-section">
       {/* <Box
        justifyContent="center"
        sx={{
          width: 800,
          height: 400,
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <br />
        <br />
        <br /> 
        <br /> 
        <br /> 
        메타버스 갤러리
      </Box> */}
    </div >
  );
};

export default GallerySection;