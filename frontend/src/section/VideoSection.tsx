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
  const test = `${process.env.PUBLIC_URL}/gif/test.gif`
  const datas = [
    {
      video: test,
      content: 'fadsfadsf'
    },
    {
      video: test,
      content: '소설의 프롤로그는 오베가 애플 전자제품 가게에서 점원을 윽박지르면서 시작한다.\n\
       베는 아내 소냐가 죽은 이후 살아갈 이유가 없다며 죽기를 바란다. 하지만 죽기로 다짐할 때마다.\n\
        오베가 필요로 하는 사건이 발생한다. 이웃으로 온 패트릭의 차를 고쳐주기도 하고, 갈 곳 없는 고양이를 키우기도 하고, 기차에 치일 뻔한 사람을 구하기도 한다.\n\
       오베는 괴팍한 성격과 꼰대다운 편향된 사고를 가지고 있지만 우직하게 자신의 일을 처리하고, 남을 도울 수 있을 때는 돕는 성격으로 나와서 사건들을 처리할 때까지 죽음을 미루게 된다.'
    },
    {
      video: test,
      content: 'fadsfadsf'
    },
    {
      video: test,
      content: 'fadsfadsf'
    },
    {
      video: test,
      content: 'fadsfadsf'
    },
    {
      video: test,
      content: 'fadsfadsf'
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
                  <Stack direction="row" flex={1}>
                    <Stack flex={1.5}>
                    <div className="outer">
                        {isMobile ? 
                        // eslint-disable-next-line jsx-a11y/alt-text
                          <img key={1} src={data.video} width='100%' /> : 
                        // eslint-disable-next-line jsx-a11y/alt-text
                        <img 
                          src={data.video} 
                          width='100%' 
                          max-width='100%' 
                          height='auto'  
                        />}
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
                        Header
                      </Box>
                      <Box sx={{
                        fontSize: 'calc(10px + 1vmin)',
                        p: 3,
                        textAlign: 'left',
                        maxHeight: '300px',
                        opacity: '1 !important',
                        color: 'white',
                        overflowY: 'hidden',
                      }}>
                        {
                          !isMobile &&
                          data.content.split('\n').map((line) => {
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