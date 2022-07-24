import React from 'react';
import { Box, Stack } from '@mui/material';
import styled from 'styled-components';

const IntroSection: React.FC = () => {
  const image = `${process.env.PUBLIC_URL}/images/OddLogo.png`
  return (
    <div id="1" className="App-section" >
      <div 
        data-aos="fade-up"
        data-aos-delay="200" 
      >
        <Stack direction="row" spacing={15}>
          <Box>
            <img
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
              <div 
                style={{ width: '75vh', textAlign: "left"}}
              >
                <h4>
                  ODBY(ODD BODY) 는 모션캡쳐 기술을 통해 인간의 신체를 메타버스에
                  구현하기 위한 프로젝트이다.
                </h4>
                <span className="ODBYODD-BODY-OD">
                  'ODBY(ODD BODY)'는 블록체인 상에 신체의 움직임을 남길 수 있는 다양한 실험을
                  진행하였으며, 모션캡쳐를 활용하여 인간의 움직임을 신체의 형상을 띤 캐릭터 '오디(OD)'
                  에게 이식하였다. 해당 캐릭터는 다양한 동작들을 수행할 수 있는 디지털 댄서가 되었고
                  '오디(OD)'의 움직임과 미디어 아트의 결합을 시도했다. 이를 통해 '[ODD BODY]' 
                  시리즈를 제작했다.
                </span>
              </div>
            </Box>
          </Stack>
        </Stack>
      </div>  
    </div>
  );
};

export default IntroSection;