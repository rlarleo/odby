import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Paper, Stack } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VideoOpenSeaButton from '../components/VideoOpenSeaButton'

const StyledSlider = styled(Slider)`
.slick-dots li.slick-active button:before {
    color: white !important;
  }
`;

const VideoSection: React.FC = () => {
  const slider1 = useRef<Slider | null>(null);
  const [nav1, setNav1] = useState<Slider | null>(null);
  console.log(nav1);
  console.log(slider1);
  const [test, setTest] = useState({
    oldSlide: 0,
    activeSlide: 0,
    activeSlide2: 0
  });

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
                    <Box sx={{
                      p: 3, width: "380px", backgroundColor: 'primary.dark',
                    }}>
                      여기 설명을 적을거라구
                    </Box>
                  </Stack>
                </Paper>
              )
            })}
          </StyledSlider>
          {/* <VideoOpenSeaButton url={'https://opensea.io/'} /> */}
        </Box>
      </Box>
    </div >
  );
};

export default VideoSection;