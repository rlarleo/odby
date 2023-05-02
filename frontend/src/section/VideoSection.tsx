import React, { useRef, useCallback, RefObject, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, Paper, Stack } from '@mui/material';
import '../slider/slick.css';
import '../slider/slick-theme.css';
import Slider from 'react-slick';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next'

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

type DOMRectProperty =
  | "height"
  | "width"
  | "x"
  | "y"
  | "top"
  | "right"
  | "bottom"
  | "left";

export const useGetElementProperty = <T extends HTMLElement>(
  elementRef: RefObject<T>
) => {
  const getElementProperty = useCallback(
    (targetProperty: DOMRectProperty): number => {
      const clientRect = elementRef.current?.getBoundingClientRect();
      if (clientRect) {
        return clientRect[targetProperty];
      }

      return 0;
    },
    [elementRef]
  );

  return {
    getElementProperty,
  };
};

const VideoSection: React.FC = () => {
  const { t }  = useTranslation(['page'])
  const [contentHeight, setContentHeight] = useState(0);
  const targetRef = useRef(null);
  const { getElementProperty } =
    useGetElementProperty<HTMLDivElement>(targetRef);
  useEffect(() => {
    setContentHeight(getElementProperty("width")/2 - 40);
  }, [getElementProperty]);
  const datas = [
    {
      video: `${process.env.PUBLIC_URL}/gif/of me.gif`,
      header: 'of me',
      content: t('page:video.of me')
    },
    {
      video: `${process.env.PUBLIC_URL}/gif/tree.gif`,
      header: 'Tree',
      content: t('page:video.Tree')
    },
    {
      video: `${process.env.PUBLIC_URL}/gif/balloon1.gif`,
      header: 'Balloon 1.',
      content: t('page:video.Balloon 1.')
    },
    {
      video: `${process.env.PUBLIC_URL}/gif/balloon2.gif`,
      header: 'Balloon 2.',
      content: t('page:video.Balloon 2.')
    },
    {
      video: `${process.env.PUBLIC_URL}/gif/parsona.gif`,
      header: 'persona',
      content: t('page:video.persona')
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
      className={ isMobile ? "App-mobile-video-section" : "App-video-section" }
      style={{
        backgroundSize: '100%',
        backgroundImage: `url(${`${process.env.PUBLIC_URL}/images/slide_back.png`})`,
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Stack
        sx={{px: isMobile? 5 : 10, minWidth: isMobile? 'auto' : '850px', width: isMobile? '80vw' : '50vw' }}
      >
        <span 
          className="-ODBYODD-BODY-VIDEO-"
          style={{paddingBottom: 5}}
        >
          <span>{t('page:video.content')}</span>
        </span>
      </Stack>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          borderRadius: '12px',
          paddingX: isMobile? 0 : 15,
          paddingBottom: isMobile? 5 : 0
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
                            width:'100%',
                            minHeight: '220px',
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                              borderRadius: '0px 0px 20px 20px;'
                          }}
                        >
                          <div style={{position: "absolute", zIndex: 10, minWidth: "100%", minHeight: "100%"}}>
                            <img key={1} src={data.video} style={{ display: 'none'}}/> 
                          </div>
                          <div style={{position: "relative"}}>
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
                            maxWidth: "70vw",
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
                          </div>
                        </Stack>
                      </Stack> :
                      <Stack direction="row" flex={1}>
                        <Stack flex={1.5}>
                          <div className="outer">
                            <img
                              ref={targetRef}
                              src={data.video} 
                              width='100%' 
                              max-width='100%' 
                              height='auto'  
                            />
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
                            pb: 3,
                            textAlign: 'left',
                            opacity: '1 !important',
                            color: 'white'
                          }}>
                            {data.header}
                          </Box>
                          <Box
                            sx={{
                              px: 3,
                              pb: 3
                            }}
                          >
                            <div
                              className="hide-scroll"
                              style={{
                              fontSize: 'calc(8px + 1vmin)',
                              textAlign: 'left',
                              maxHeight: contentHeight,
                              height: 'auto',
                              opacity: '1 !important',
                              color: 'white',
                              overflow: 'auto',
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
                          </div>
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