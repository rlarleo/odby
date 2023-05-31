import React from 'react';
import { Stack, Button } from '@mui/material';
import { isMobile } from 'react-device-detect';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';

const FootSection: React.FC = () => {
  const oddbodyLogo = `${process.env.PUBLIC_URL}/icons/oddbody_logo.png`
  const openSeaIcon = `${process.env.PUBLIC_URL}/icons/opensea.png`
  const twitterIcon = `${process.env.PUBLIC_URL}/icons/twitter.png`
  const spatialIcon = `${process.env.PUBLIC_URL}/icons/spatial.png`
  const instaIcon = `${process.env.PUBLIC_URL}/icons/insta.png`
  const seoulLogo = `${process.env.PUBLIC_URL}/icons/seoul.png`
  const retro = `${process.env.PUBLIC_URL}/images/retro.png`
  const artCouncil = `${process.env.PUBLIC_URL}/images/art_council.png`

  function handleOpensea() {
    var openNewWindow = window.open("about:blank");
    if(openNewWindow)
      openNewWindow.location.href = "https://opensea.io/collection/odby";
  }
  
  return (
    <div className="App-foot-section">
      {isMobile && 
      <Stack width = "80vw" direction="row" justifyContent="space-between">
        <Stack justifyContent="flex-end">
          <div style={{ textAlign: 'left' }}>Contact Us</div>
          <div style={{ color: 'grey', textAlign: 'left', fontSize: '10px'}} >
            odby.art@gmail.com
          </div>
        </Stack>
        <Stack direction="row" justifyContent= 'flex-end' spacing={1}>
          <Button
            sx={{ minWidth: 0 }}
          >
            <img
              src={openSeaIcon}
              alt=""
              onClick={handleOpensea}
            />
          </Button>
          <IconButton 
            style={{ padding: '0px 10px 0px 10px' }} 
            onClick={() => window.open('https://www.twitter.com/oddbody_art')}
          >
            <TwitterIcon style={{ color: 'white' }} fontSize="large" />
          </IconButton>
          <IconButton 
            style={{ padding: '0px 0px 0px 10px' }} 
            onClick={() => window.open('https://www.instagram.com/oddbody.art', '_blank')}
          >
            <InstagramIcon style={{ color: 'white' }} fontSize="large" />
          </IconButton>
          <Button
            onClick={() => window.open('https://www.spatial.io/s/ODBYs-Hi-Fi-Space-6448b78b4ed63407fd6fe82c?share=5487205696407549449', '_blank')}
          >
            <img
              src={spatialIcon}
              alt=""
              width="30px"
            />
          </Button>
        </Stack>
      </Stack>
      }
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
              paddingTop: isMobile? 5 : 30,
              width: "100%",
              textAlign: "center",
              borderBottom: "1px solid #aaa",
              lineHeight: "0.1em",
              margin: isMobile ? "0px 0 20px" : "10px 0 20px",
            }}
          >
          </div>
          {isMobile ? 
            <Stack direction="row" justifyContent= "flex-end" >
              <Stack direction="row" spacing={3}>
                <img
                  src={artCouncil}
                  alt=""
                  height="30px"
                />
                <img
                  src={retro}
                  alt=""
                  height="30px"
                />
                <img
                  src={seoulLogo}
                  alt=""
                  height="30px"
                />
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
                  <Button
                    onClick={() => window.open('https://www.spatial.io/s/ODBYs-Hi-Fi-Space-6448b78b4ed63407fd6fe82c?share=5487205696407549449', '_blank')}
                  >
                    <img
                      src={spatialIcon}
                      alt=""
                      width="30px"
                    />
                  </Button>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={3}>
                <img
                  src={artCouncil}
                  alt=""
                  width="100px"
                />
                <img
                  src={retro}
                  alt=""
                  width="100px"
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