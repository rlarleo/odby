import React from 'react';
import { Box, Stack } from '@mui/material';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next'

const IntroSection: React.FC = () => {
  const { t }  = useTranslation(['page'])
  const image = `${process.env.PUBLIC_URL}/images/OddPerson.png`

  return (
    <div id="1" className="App-section" >
      <Stack
        direction={isMobile? "column" : "row"}
        spacing={isMobile? 1 : -5}
        sx={{paddingX: isMobile? 5 : 10, paddingBottom: isMobile? 5 : 10, paddingTop: isMobile? 5 : 10}}
      >
        <Box
          data-aos={isMobile ? "fade-up" : "fade-right"}
          data-aos-delay="50" 
        >
          <img
            src={image} 
            className="App-logo" 
            alt="logo"
            style={{ height: isMobile? "none" : "100%" }}
          />
        </Box>
        <Stack 
          data-aos={isMobile ? "fade-up" : "fade-left"}
          data-aos-delay="50" 
          alignItems="center"   
          justifyContent="center"
          textAlign="left"
          maxWidth={"600px"}
        >
            <h4>
              {t('page:intro.header')}
            </h4>
            <span className="ODBYODD-BODY-OD">
              {t('page:intro.content1')} <br />
              {t('page:intro.content2')} <br />
              {t('page:intro.content3')} <br />
              {t('page:intro.content4')} <br />
              {t('page:intro.content5')} <br />
              {t('page:intro.content6')} <br />
              {t('page:intro.content7')} <br />
              {t('page:intro.content8')}
            </span>
        </Stack>
      </Stack>
    </div>
  );
};

export default IntroSection;