import React from 'react';
import { Stack, Button } from '@mui/material';
import { isMobile } from 'react-device-detect';

const FootSection: React.FC = () => {
  const oddbodyLogo = `${process.env.PUBLIC_URL}/icons/oddbody_logo.png`
  const openSeaIcon = `${process.env.PUBLIC_URL}/icons/opensea.png`
  const twitterIcon = `${process.env.PUBLIC_URL}/icons/twitter.png`
  const instaIcon = `${process.env.PUBLIC_URL}/icons/insta.png`
  const seoulLogo = `${process.env.PUBLIC_URL}/icons/seoul.png`
  const retro = `${process.env.PUBLIC_URL}/images/retro.png`

  function handleOpensea() {
    var openNewWindow = window.open("about:blank");
    if(openNewWindow)
      openNewWindow.location.href = "https://opensea.io/ODBY";
  }
  
  return (
    <div className="App-foot-section">
      <Stack direction="row" sx={{ pb: isMobile? 5 : 10 }}>
        {!isMobile &&
          <Button disabled>
            <img
              src={oddbodyLogo}
              alt=""
              width= { isMobile? "40px" : "80px" }
              style={{paddingRight: isMobile? "10px" : "30px"}}
            />
          </Button>
        }
        <Stack width = "80vw" direction="column">
          <div
            style={{
              paddingTop: 30,
              width: "100%",
              textAlign: "center",
              borderBottom: "1px solid #aaa",
              lineHeight: "0.1em",
              margin: "10px 0 20px",
            }}
          >
          </div>
          {isMobile ? 
            <Stack direction="row" justifyContent= "space-between" >
              <Stack sx={{ paddingRight: '10px' }}>
                <div style={{ textAlign: 'left' }}>Contact Us</div>
                <div style={{ color: 'grey', textAlign: 'left', fontSize: '10px', paddingTop: '10px' }}>
                  odby.art@gmail.com
                </div>
              </Stack>
              <Stack direction="row" justifyContent= 'flex-end'>
                <Button
                  onClick={handleOpensea}
                >
                  <img
                    src={openSeaIcon}
                    alt=""
                    width= "30px"
                  />
                </Button>
                <Button
                  onClick={() => window.open('https://www.twitter.com/oddbody_art')}
                >
                  <img
                    src={twitterIcon}
                    alt=""
                    width="30px"
                  />
                </Button>
                <Button
                  onClick={() => window.open('https://www.instagram.com/oddbody.art', '_blank')}
                >
                  <img
                    src={instaIcon}
                    alt=""
                    width="30px"
                  />
                </Button>
              </Stack>
            </Stack> 
            : 
            <Stack direction="row" justifyContent= 'space-between'>
              <Stack direction="row">
                <Stack sx={{ paddingRight: isMobile? '10px' : '20px' }}>
                  <div style={{ textAlign: 'left' }}>Contact Us</div>
                  <div style={{ color: 'grey', textAlign: 'left', fontSize: '10px', paddingTop: '10px' }}>
                    odby.art@gmail.com
                  </div>
                </Stack>
                <Stack direction="row">
                  <Button
                    onClick={handleOpensea}
                  >
                    <img
                      src={openSeaIcon}
                      alt=""
                      width= "30px"
                    />
                  </Button>
                  <Button
                    onClick={() => window.open('https://www.twitter.com/oddbody_art')}
                  >
                    <img
                      src={twitterIcon}
                      alt=""
                      width="30px"
                    />
                  </Button>
                  <Button
                    onClick={() => window.open('https://www.instagram.com/oddbody.art', '_blank')}
                  >
                    <img
                      src={instaIcon}
                      alt=""
                      width="30px"
                    />
                  </Button>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={3}>
                <img
                  src={retro}
                  alt=""
                />
                <img
                  src={seoulLogo}
                  alt=""
                />
              </Stack>
            </Stack>
          }
        </Stack>
      </Stack>
    </div>
  );
};

export default FootSection;