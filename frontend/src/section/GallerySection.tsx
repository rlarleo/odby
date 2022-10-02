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
  backgroundColor: 'black',  textTransform: 'none',
   '&:root': {
    minWidth: '200px',
  },
  '&:hover': {
    backgroundColor: '#5d8000',
    borderColor: '#c3ff17',
  },
  '&:disabled': {
    backgroundColor: '#c3ff17',
    borderColor: '#c3ff17',
    color: 'black',
  },
}));


const GallerySection: React.FC = () => {
  const { t }  = useTranslation(['page']);
  return (
    <div 
      id="3" 
      className={ isMobile ? "App-mobile-gallery-section" : "App-gallery-section" }
      style={{
        backgroundSize: '100%',
        backgroundImage: `url(${`${process.env.PUBLIC_URL}/images/gallery_back.gif`})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
       <div className='Frame-44'>
        <Stack direction="column" sx={{width: isMobile ? '90vw' : '60vw'}} alignItems="center">
       {/* {!isMobile &&
          <Button disabled>
            <img
              src={oddbodyLogo}
              alt=""
              width= { isMobile? "40px" : "100px" }
              style={{paddingRight: isMobile? "10px" : "30px"}}
            />
          </Button>
        } */}
        <Stack direction="row" width="100%" justifyContent="space-between">
          <div style={{fontSize: isMobile? 60 : 80, fontWeight: 100}}>
            +
          </div>
          <div style={{fontSize: isMobile? 60 : 80, fontWeight: 100}}>
            +
          </div>
        </Stack>
        <Stack width = {isMobile ? "90%" : "70%"} direction="row" justifyContent="space-between" alignItems="center">
          <span style={{fontSize: isMobile? "64px" : "100px", fontWeight: 'bold'}}>
            ODBY
          </span>
          <ButtonGroup
            disableElevation
            variant="outlined"
            sx={{ color: 'white', borderColor: 'white' }}
          >
          <ColorButton
            variant="outlined"
            onClick={() => window.open('https://spatial.io/s/ODBYs-Immersive-Place-62fcb86677f41c00017d52a9?share=5271407935954179074', '_blank')}
            sx={{ width: isMobile ? 'auto' : 200, padding: 2, margin: 1 }}
          >
            <div style={{fontSize: isMobile? "16px" : "24px", fontWeight: 'bold'}}>
              {t('page:gallery.text4')}
            </div>
          </ColorButton> 
          </ButtonGroup>
        </Stack>
        <Stack width = {isMobile ? "90%" : "70%"}  direction="row" justifyContent="space-between" alignItems="center">
          <span style={{fontSize: isMobile? "16px" : "24px", fontWeight: 'bold', color: 'red'}}>
            {t('page:gallery.text1')}
          </span>
        </Stack>
          <span style={{fontSize: isMobile? "14px" : "16px", paddingTop: '40px'}}>
            {t('page:gallery.text2')}
          </span>
          <span style={{fontSize: isMobile? "14px" : "16px", paddingTop: '20px'}}>
            {t('page:gallery.text3')}
          </span>
        <Stack direction="row" width="100%" justifyContent="space-between">
          <div style={{fontSize: isMobile? 60 : 80, fontWeight: 100}}>
            +
          </div>
          <div style={{fontSize: isMobile? 60 : 80, fontWeight: 100}}>
            +
          </div>
        </Stack>
        </Stack>
      </div>
    </div >
  );
};

export default GallerySection;