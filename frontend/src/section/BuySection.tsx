import React, { useState, useEffect } from 'react';
import { Box, Stack, Button, Typography } from '@mui/material';
import OpenSeaButton from '../component/Button/OpenSeaButton';
import { isMobile } from 'react-device-detect';
import GallerySection from '../section/GallerySection';
import { borderRadius, fontWeight } from '@mui/system';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { ButtonProps } from '@mui/material/Button';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  minHeight: 100,
  color: 'black',
  fontWeight: 800,
  fontSize: 16,
  borderColor: 'black',
  borderWidth: 'medium',
  backgroundColor: '#c3ff17',
  '&:hover': {
    backgroundColor: '#f3ffa8',
    borderColor: 'black',
    borderWidth: 'medium',
  },
}));


const BuySection: React.FC = () => {
  const [scroll, setScroll] = useState(false);
  const oddbodyLogo = `${process.env.PUBLIC_URL}/icons/ticket.png`

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
  // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if(window.scrollY >= 500){
      setScroll(true);
      console.log(scroll)
    }else{
    // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
    }

  };

  function handleOpensea() {
    var openNewWindow = window.open("about:blank");
    if(openNewWindow)
      openNewWindow.location.href = "https://opensea.io/ODBY";
  }

  return (
    <div 
      className="App-section"
      style={{
        // backgroundSize: '100%',
        // backgroundImage: `url(${`${process.env.PUBLIC_URL}/images/TwitterButton.png`})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundAttachment: 'fixed'
      }}
    >
        {isMobile ?
          <Button
            onClick={handleOpensea}
          >
            <Stack 
              style={{
                width: '80vw',
                minHeight: '40vw',
                backgroundSize: '100%',
                backgroundImage: `url(${`${process.env.PUBLIC_URL}/images/new_ticket.png`})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
            >
            </Stack>
          </Button>
        :
        <Button
          onClick={handleOpensea}
        >
          <Stack 
            direction = "row"
            style={{
              width: '55vw',
              minHeight: '450px',
              backgroundSize: '100%',
              backgroundImage: `url(${`${process.env.PUBLIC_URL}/images/new_ticket.png`})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          >
          </Stack>
        </Button>
          // <Stack
          //   direction="row"
          //   style={{
          //       height: '280px',
          //       width: '90vh',
          //       backgroundImage: `url(${`${process.env.PUBLIC_URL}/images/ticket-background.png`})`,
          //       backgroundSize: '100%',
          //       backgroundRepeat: 'no-repeat',
          //       backgroundPosition: 'center'
          //     }}
          // >
          //   <Stack
          //     flex={0.8}
          //     style={{
          //       padding: 10,
          //       backgroundImage: `url(${`${process.env.PUBLIC_URL}/images/ticket.png`})`,
          //       backgroundSize: '100%',
          //       backgroundRepeat: 'no-repeat',
          //     }}
          //   >
          //   </Stack>
          //   <Stack
          //     flex={3}
          //     direction="row"
          //     spacing={0.5}
          //   >
          //     <Stack
          //       flex={2}
          //       style={{
          //         backgroundColor: 'white',
          //         borderRadius: '0 15px 15px 0'
          //       }}
          //     >
          //       <Stack
          //         sx={{
          //           pt: 1.5,
          //           textAlign: 'left'
          //         }}
          //         spacing={-2}
          //       >
          //         <Stack
          //           fontSize={80}
          //           fontWeight={600}
          //           color="black"
          //         >
          //           ODBY
          //         </Stack>
          //         <div className="ODBY-ODD-BODY-ODBY-Open-Sea-Ticket---ODBY-NFT---">
          //           (ODD BODY)
          //         </div>
          //       </Stack>
          //       <Stack
          //         sx={{
          //           pt: 6,
          //           textAlign: 'left',
          //         }}
          //       >
          //         <Stack
          //           fontSize={20}
          //           fontWeight={600}
          //           color="black"
          //           display="inline-block"
          //         >
          //           <span style={{ backgroundColor: "#e9fdb1" }}>Virtual exhibition of the ODBY</span>
          //         </Stack>
          //         <Stack
          //           sx={{
          //             pt: 1.5,
          //             pr: 4
          //           }}
          //           fontSize={10}
          //           color="black"
          //           display="inline-block"
          //         >
          //           <span>
          //             - Please make sure to check your admission ticket to get the NFT collection of the ODBY project. <br />
          //             - You can own the 'ODBY video NFT' which combines dancer's movements and graphic art using our Open Sea platform.
          //           </span>
          //         </Stack>
          //       </Stack>
          //     </Stack>
          //     <Stack
          //       flex={1}
          //       style={{
          //         backgroundColor: 'white',
          //         borderRadius: '15px 0 0 15px'
          //       }}
          //       spacing={1}
          //     >
          //       <Stack
          //         sx={{
          //           pt: 3,
          //           pl: 3,
          //           textAlign: 'left',
          //           fontWeight: 700,
          //           fontSize: 20,
          //         }}
          //         color="gray"
          //       >
          //         Click Here !
          //       </Stack>
          //       <Stack
          //         sx={{
          //           pl: 3,
          //           pr: 3,
          //           pb: 3,
          //         }}>
          //         <ColorButton
          //           onClick={handleOpensea}
          //           variant="outlined"
          //         >
          //           BUY A ODBY ON OPENSEA
          //         </ColorButton>
          //       </Stack>
          //       <Stack
          //         sx={{
          //           pt: 1,
          //           px: 3,
          //         }}
          //       >
          //         <Stack
          //           sx={{
          //             backgroundImage: `url(${`${process.env.PUBLIC_URL}/images/bacord.png`})`,
          //             // backgroundSize: '100%',
          //             minHeight: 70,
          //             backgroundRepeat: 'no-repeat',
          //           }}
          //         />
          //       </Stack>
          //     </Stack>
          //   </Stack>
          // </Stack>
      }

      
      <Stack
        sx={{p: isMobile? 10 : 10, pb: isMobile? 20 : 0, width: '60vw'}}
      >
        <span 
          className="-ODBYODD-BODY-"
          data-aos="fade-up"
          data-aos-delay="50" 
        >
          <span style={{color: '#bbbbbb'}}>인간의 영혼과 마음은 몸이라는 구조로부터 독단적으로 떨어져나올 수 없다. 
          ODBY (ODD BODY)는 우리가 당연하게 생각하고 바라보고 사용해온 </span> 
          ‘신체’를 뒤틀고 변화시키며 발현되는 이미지를 통해 관객들에게 일상의 현상과 기존의 대상을 새롭게 이해하는 시각
          <span style={{color: '#bbbbbb'}}>을 제시하고자 한다.</span> <br />< br />
          <span style={{color: '#bbbbbb'}}>ODBY(ODD BODY)는 각 개인의 생애를 함께하는 ‘몸’을 시각적인 뒤틀어짐의 현상으로 실제와 판타지 사이의 괴리를 만들고자 한다. </span>
          궁극적으로 이를 바라보는 개인의 삶이 영역으로 이를 끌어와 앞으로 그들의 삶에서 경험하게 되는 것
          <span style={{color: '#bbbbbb'}}>들을 받아들이는데 있어 다양한 관점을 제안한다.</span> <br />< br />
          <span style={{color: '#bbbbbb'}}>‘ODBY(ODD BODY)’는 무용 예술이 블록체인 미디어에서 활동할 가능성을 확인하며 관객과 공연장에서만 맺어진 </span> 
          제한적인 관계에서 벗어나 온라인 매체에서 또한 유동적
          <span style={{color: '#bbbbbb'}}>인 관계를 맺을 수 있길 희망한다.</span>
        </span>
      </Stack>
    </div >
  );
};

export default BuySection;