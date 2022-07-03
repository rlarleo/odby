import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Box, Paper, Stack } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import VideoOpenSeaButton from '../components/Button/VideoOpenSeaButton'

const StyledSlider = styled(Slider)`
.slick-dots li.slick-active button:before {
    color: white !important;
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
    <div className="App-section">
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <Box sx={{ my: 1, width: '780px' }}>
          <StyledSlider {...settings}>
            {videos.map(element => {
              return (
                <Paper
                  variant="outlined"
                  color="grey"
                  sx={{
                    textAlign: 'center',
                    minHeight: '235px',
                    p: 2,
                  }}>
                  <Stack direction="row">
                    <video src={video} width="400px" autoPlay muted loop />
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
                </Paper>
              )
            })}
          </StyledSlider>
        </Box>
      </Box>
    </div >
  );
};

export default VideoSection;