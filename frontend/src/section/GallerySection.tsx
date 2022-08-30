import React from 'react';
import { Stack, Button } from '@mui/material';
import '../slider/slick.css';
import '../slider/slick-theme.css';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next'

const GallerySection: React.FC = () => {
  const { t }  = useTranslation(['page']);
  const oddbodyLogo = `${process.env.PUBLIC_URL}/icons/oddbody_logo.png`
  return (
    <div 
      id="3" 
      className={ isMobile ? "App-mobile-gallery-section" : "App-gallery-section" }
      style={{
        backgroundSize: '100%',
        backgroundImage: `url(${`${process.env.PUBLIC_URL}/images/gallery_back.png`})`,
        backgroundRepeat: 'no-repeat'
      }}
    >
       <div className='Frame-44'>
        <Stack direction="column" sx={{width: '80vw'}}>
       {!isMobile &&
          <Button disabled>
            <img
              src={oddbodyLogo}
              alt=""
              width= { isMobile? "40px" : "100px" }
              style={{paddingRight: isMobile? "10px" : "30px"}}
            />
          </Button>
        }
          <span style={{fontSize: isMobile? "36px" : "48px", fontWeight: 'bold', color: 'red'}}>
            Coming Soon
          </span>
          <span style={{fontSize: isMobile? "16px" : "24px", fontWeight: 'bold'}}>
            {t('page:gallery.text1')}
          </span>
          <span style={{fontSize: isMobile? "14px" : "16px", paddingTop: '40px'}}>
            {t('page:gallery.text2')}
          </span>
          <span style={{fontSize: isMobile? "14px" : "16px", paddingTop: '20px'}}>
            {t('page:gallery.text3')}
          </span>
        </Stack>
      </div>
    </div >
  );
};

export default GallerySection;