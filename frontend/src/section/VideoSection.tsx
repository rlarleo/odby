import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Box, Paper, Stack } from '@mui/material';
import '../slider/slick.css';
import '../slider/slick-theme.css';
import Slider from 'react-slick';
import VideoOpenSeaButton from '../component/Button/VideoOpenSeaButton'
import { isMobile } from 'react-device-detect';

const StyledSlider = styled(Slider)`
.slick-dots li.slick-active  {
  color: white !important;
}
.slick-next:before {
    display: none;
}
.slick-prev:before {
    display: none;
}
.slick-slide {
  background-color: transparent;
}
`;

const VideoSection: React.FC = () => {
  const datas = [
    {
      video: `${process.env.PUBLIC_URL}/gif/of me.gif`,
      header: 'of me',
      content: '- You can\'t change the fact that the time goes only the one way, even through the physical force. But in the world view where the characters exist, has directed the various scenes by twisting the element of time.'
    },
    {
      video: `${process.env.PUBLIC_URL}/gif/tree.gif`,
      header: 'Tree',
      content: 'We completed the shape of the tree by detecting the little moving movements. \n\
      - Attempted to express the history of our body as an existent image. We tend to immerse ourselves in this self and easily forget the past. But to be present yourself, to develop personal identities, even if those are minor moments, lots of traces that spent many of the times got gathered for your present self and future.'
    },
    {
      video: `${process.env.PUBLIC_URL}/gif/balloon1.gif`,
      header: 'Balloon 1.',
      content: '- A desire to take care of the way one looks has been progressed diversely as to diet, plastic surgery, makeup, etc. in human\'s history. A swelling body expresses an attitude of becoming obsession with oneself\'s drawback.'
    },
    {
      video: `${process.env.PUBLIC_URL}/gif/balloon2.gif`,
      header: 'Balloon 2.',
      content: '- A desire to take care of the way one looks has been progressed diversely as to diet, plastic surgery, makeup, etc. in human\'s history. A swelling body expresses an attitude of becoming obsession with oneself\'s drawback.'
    },
    {
      video: `${process.env.PUBLIC_URL}/gif/parsona.gif`,
      header: 'persona',
      content: '- We experience the various looks when we change our personalities, perspectives and attitudes according to the given environment. And that causes confusion about one\'s identity. In the same circumstance, the characters of the piece have a distinct form of the human body, but they exist as the heterogeneous forms using the somatic function differently. \<Persona\> is directed to agonize about oneself who alters situationally.'
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: undefined,
    nextArrow: undefined
  };

  return (
    <div 
      id="2" 
      className="App-video-section"
      style={{
        backgroundSize: '100%',
        backgroundImage: `url(${`${process.env.PUBLIC_URL}/images/slide_back.png`})`,
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          borderRadius: '12px',
          padding: isMobile? 0 : 15
        }}
      >
        <Box 
          sx={{ 
            my: 1, 
            width: isMobile? '80vw' : '70vw',
            borderRadius: '12px',
            backgroundSize: '100%',
          }}
          >
          <StyledSlider {...settings}>
            {datas.map(data => {
              return (
                <Box
                  // width= "80% !important"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    textAlign: 'center',
                    padding: 0,
                  }}>
                    {isMobile ? 
                      <Stack direction="column">
                        <Stack>
                          <div className="mobile-outer">
                            <img key={1} src={data.video} width='100%' /> 
                          </div>
                          </Stack>
                        <Stack
                          direction="column"
                          alignItems="left"
                          sx={{
                            minHeight: '220px',
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                              borderRadius: '0px 0px 20px 20px;'
                          }}
                        >
                          <Box sx={{
                            fontSize: 'calc(10px + 2vmin)',
                            fontWeight: '600',
                            pt: 3,
                            pl: 3,
                            textAlign: 'left',
                            opacity: '1 !important',
                            color: 'white'
                          }}>
                            {data.header}
                          </Box>
                          <Box sx={{
                            fontSize: 'calc(8px + 1vmin)',
                            p: 3,
                            textAlign: 'left',
                            maxHeight: '300px',
                            opacity: '1 !important',
                            color: 'white',
                            overflowY: 'hidden',
                          }}>
                            { data.content.split('\n').map((line) => {
                                return (
                                  <>
                                    {line}
                                    <br />
                                  </>
                                );
                              })
                            }
                          </Box>
                        </Stack>
                      </Stack> :
                      <Stack direction="row" flex={1}>
                        <Stack flex={1.5}>
                        <div className="outer">
                            {/* <div style={{height: isMobile? '20px' : '50px', backgroundColor: 'white'}} /> */}
                              <img 
                                src={data.video} 
                                width='100%' 
                                max-width='100%' 
                                height='auto'  
                              />
                            {/* <div style={{height: isMobile? '20px' : '50px', backgroundColor: 'white'}} /> */}
                          </div>
                          </Stack>
                        <Stack
                          direction="column"
                          alignItems="left"
                          flex={1}
                          sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                            borderRadius: '0px 20px 20px 0px;'
                          }}
                        >
                          <Box sx={{
                            fontSize: 'calc(10px + 2vmin)',
                            fontWeight: '600',
                            pt: 3,
                            pl: 3,
                            textAlign: 'left',
                            opacity: '1 !important',
                            color: 'white'
                          }}>
                            {data.header}
                          </Box>
                          <Box sx={{
                            fontSize: 'calc(8px + 1vmin)',
                            p: 3,
                            textAlign: 'left',
                            maxHeight: '300px',
                            opacity: '1 !important',
                            color: 'white',
                            overflowY: 'hidden',
                          }}>
                            {data.content.split('\n').map((line) => {
                                return (
                                  <>
                                    {line}
                                    <br />
                                  </>
                                );
                              })
                            }
                          </Box>
                        </Stack>
                      </Stack>
                    }
                  
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