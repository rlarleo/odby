import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Box, Paper, Stack } from '@mui/material';
import '../slider/slick.css';
import '../slider/slick-theme.css';
import Slider from 'react-slick';
import VideoOpenSeaButton from '../component/Button/VideoOpenSeaButton'

const StyledSlider = styled(Slider)`
.slick-dots li.slick-active button:before {
    color: white !important;
  }
.slick-slide {
  background-color: black;
}
`;

const VideoSection: React.FC = () => {
  const video = `${process.env.PUBLIC_URL}/videos/test.mp4`
  const videos = [video, video, video, video, video, video];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="2" className="App-video-section">
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          borderRadius: '12px',
        }}
      >
        <Box sx={{ my: 1, width: '80vw', borderRadius: '12px' }}>
          <StyledSlider {...settings}>
            {videos.map(element => {
              return (
                <Box
                  width= "90% !important"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    backgroundColor: 'white',
                    textAlign: 'center',
                    minHeight: '60vh',
                    p: 2,
                    borderRadius: '12px',
                    paddingX: 0,
                  }}>
                  <Stack direction="row">
                    <video src={video} width="600px" autoPlay muted loop />
                    <Stack
                      direction="column"
                      justifyContent="space-between"
                      alignItems="center"
                      width="100%"
                    >
                      <Box sx={{
                        backgroundColor: 'primary.dark',
                        fontSize: '15px'
                      }}>
                        여기 설명을 적을거라구
                      </Box>
                      <VideoOpenSeaButton url={'https://opensea.io/'} />
                    </Stack>
                  </Stack>
                </Box>
              )
            })}
          </StyledSlider>
        </Box>
      </Box>
    </div >
  );
};

export default VideoSection;