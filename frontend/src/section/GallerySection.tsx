import React from 'react';
import { Stack, Button, ButtonGroup } from '@mui/material';
import '../slider/slick.css';
import '../slider/slick-theme.css';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next'
import { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: '#c3ff17',
  // paddingY: 30,
  borderColor: '#c3ff17',
  borderWidth: 'medium',
  textTransform: 'none',
   '&:root': {
    minWidth: '200px',
  },
  '&:hover': {
    // backgroundColor: '#5d8000',
    borderWidth: 'medium',
    borderColor: '#46db55',
    color: '#46db55',
  },
  '&:disabled': {
    // backgroundColor: '#c3ff17',
    borderColor: '#c3ff17',
    color: 'black',
  },
}));


const GallerySection: React.FC = () => {
  const { t }  = useTranslation(['page']);
  const backgroundVideo = `${process.env.PUBLIC_URL}/videos/background_video.mp4`
  return (
    <div 
      id="3" 
      className={ isMobile ? "App-mobile-gallery-section" : "App-gallery-section" }
      style={{ paddingBottom: isMobile ? 30 : 0}}
    >
       <div className='Frame-44'>
        <div className= {isMobile ? "mobileViedo" : "textMode"}>
          <video width={isMobile ? "230%" : "65%"} muted loop autoPlay playsInline>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
        <div className="textMode">
          <Stack direction="column" sx={{width: isMobile ? '90vw' : '60vw'}} alignItems="center">
            {!isMobile && 
              <Stack direction="row" width="100%" paddingBottom={isMobile? 0 : 10} justifyContent="space-between">
                <div style={{fontSize: isMobile? 60 : 80, fontWeight: 100}}>
                  +
                </div>
                <div style={{fontSize: isMobile? 60 : 80, fontWeight: 100}}>
                  +
                </div>
              </Stack>
            }
            <Stack width = {isMobile ? "80%" : "70%"} direction="row" justifyContent="space-between" alignItems="center">
              <span style={{fontSize: isMobile? "72px" : "100px", fontWeight: 'bold', paddingBottom: isMobile? "30px" : "0px"}}>
                ODBY
              </span>
              {!isMobile && <ButtonGroup
                disableElevation
                variant="outlined"
                sx={{ color: 'white', borderColor: 'white' }}
              >
                <ColorButton
                  variant="outlined"
                  onClick={() => window.open('https://www.spatial.io/s/ODBYs-Hi-Fi-Space-6448b78b4ed63407fd6fe82c?share=5487205696407549449', '_blank')}
                  sx={{ width: isMobile ? 'auto' : 200, padding: 2, margin: 1 }}
                >
                  <div style={{fontSize: isMobile? "16px" : "24px", fontWeight: 'bold'}}>
                    {t('page:gallery.text4')}
                  </div>
                </ColorButton> 
              </ButtonGroup> }
            </Stack>
            <Stack width = {isMobile ? "80%" : "70%"}  direction="row" justifyContent="space-between" alignItems="center">
              <span style={{fontSize: isMobile? "16px" : "24px", fontWeight: 'bold', color: 'red'}}>
                {t('page:gallery.text1')}
              </span>
              {isMobile && <ButtonGroup
                disableElevation
                variant="outlined"
                sx={{ color: 'white', borderColor: 'white' }}
              >
                <ColorButton
                  variant="outlined"
                  onClick={() => window.open('https://www.spatial.io/s/ODBYs-Hi-Fi-Space-6448b78b4ed63407fd6fe82c?share=5487205696407549449', '_blank')}
                >
                  <div style={{fontSize: isMobile? "16px" : "24px", fontWeight: 'bold'}}>
                    {t('page:gallery.text4')}
                  </div>
                </ColorButton> 
              </ButtonGroup>
              }
            </Stack>
            <Stack width = {isMobile ? "80%" : "70%"}  sx={{ paddingBottom: isMobile? "30px" : "0px" }}>
              <span style={{fontSize: isMobile? "10px" : "16px", paddingTop: '40px'}}>
                {t('page:gallery.text2')}
              </span>
              <span style={{fontSize: isMobile? "10px" : "16px", paddingTop: '20px'}}>
                {t('page:gallery.text3')}
              </span>
            </Stack>
            {!isMobile && 
              <Stack direction="row" width="100%" paddingTop={isMobile? 0 : 10} justifyContent="space-between">
                <div style={{fontSize: isMobile? 60 : 80, fontWeight: 100}}>
                  +
                </div>
                <div style={{fontSize: isMobile? 60 : 80, fontWeight: 100}}>
                  +
                </div>
              </Stack>
            }
          </Stack>
        </div>
      </div>
    </div >
  );
};

export default GallerySection;