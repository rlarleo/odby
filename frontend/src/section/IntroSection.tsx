import React from 'react';
import { Box, Stack } from '@mui/material';

const IntroSection: React.FC = () => {
  const image = `${process.env.PUBLIC_URL}/images/OddLogo.png`
  return (
    <div className="App-section">
      <Stack direction="column">
        <Box>
          <img
            data-aos="fade-up"
            data-aos-delay="500" 
            src={image} 
            className="App-logo" 
            alt="logo" 
          />
        </Box>
        <Stack 
          alignItems="center"   
          justifyContent="center"
        >
          <Box>
            <h4 
              data-aos="fade-up"
              data-aos-delay="500" 
            >
              ODBY(ODD BODY) 는 모션캡쳐 기술을 통해 인간의 신체를 메타버스에<br />
              구현하기 위한 프로젝트이다.<br /><br />
              블라블라
            </h4>
          </Box>
        </Stack>
        </Stack>
    </div>
  );
};

export default IntroSection;