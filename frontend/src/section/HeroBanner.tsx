import React, { useState } from 'react';
import { Box, Stack } from '@mui/material';
import PageLogo from '../component/Image/PageLogo';
import { Link } from 'react-scroll';
import { isMobile } from 'react-device-detect';
import LinkButton from '../component/Button/LinkButton'

const HeroBanner: React.FC = () => {
  const defaultFont = isMobile? 15 : 30;
  const hoverFont = isMobile? 17 : 40;
  const [aboutUs, setAboutUs] = useState(defaultFont);
  const [videoList, setVideoList] = useState(defaultFont);
  const [ourGallery, setOurGallery] = useState(defaultFont);
  const [notice, setNotice] = useState(defaultFont);

  return (
    <div className="App-section">
      <Box
        sx={{
          width: '100%',
          height: isMobile ? 'auto' : '100vh',
          backgroundSize: '100%',
          backgroundImage: `url(${`${process.env.PUBLIC_URL}/images/Banner.png`})`,
          backgroundRepeat: 'no-repeat',
          verticalAlign: 'middle'
        }}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{
            width: '100%',
            pt: isMobile ? 'auto' : '23vh',
          }}
          >
          <PageLogo />
        </Stack>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{
            width: '100%',
          }}
        >
          <Stack direction={isMobile? "column" : "row"} spacing={isMobile? 4 : 20} sx={{ p: isMobile? 0 : 10 }}>
            <Link to="1" spy={true} smooth={true} data-aos="fade-left">
              <span 
                onMouseEnter={() => setAboutUs(hoverFont)}
                onMouseLeave={() => setAboutUs(defaultFont)}
                style={{ fontSize: aboutUs, cursor: 'pointer', fontWeight: 'bold' }}
              >
                About Us
              </span>
            </Link>
            <Link to="2" spy={true} smooth={true} data-aos="fade-left">
              <span 
                onMouseEnter={() => setVideoList(hoverFont)}
                onMouseLeave={() => setVideoList(defaultFont)}
                style={{ fontSize: videoList, cursor: 'pointer', fontWeight: 'bold' }}
              >
                Video List
              </span>
            </Link>
            <Link to="3" spy={true} smooth={true} data-aos="fade-left">
              <span 
                onMouseEnter={() => setOurGallery(hoverFont)}
                onMouseLeave={() => setOurGallery(defaultFont)}
                style={{ fontSize: ourGallery, cursor: 'pointer', fontWeight: 'bold' }}
              >
                Our Gallery
              </span>
            </Link>
            <Link to="4" spy={true} smooth={true} data-aos="fade-left">
              <span 
                onMouseEnter={() => setNotice(hoverFont)}
                onMouseLeave={() => setNotice(defaultFont)}
                style={{ fontSize: notice, cursor: 'pointer', fontWeight: 'bold' }}
              >
                Notice
              </span>
            </Link>
          </Stack>
          { !isMobile && 
            <Stack  data-aos="fade-up">
              <LinkButton />
            </Stack>
          }
        </Stack>
      </Box>

    </div>
  );
};

export default HeroBanner;