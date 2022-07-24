import React from 'react';
import { Stack, Button } from '@mui/material';

const FootSection: React.FC = () => {
  const oddbodyLogo = `${process.env.PUBLIC_URL}/icons/oddbody_logo.png`
  const openSeaIcon = `${process.env.PUBLIC_URL}/icons/opensea.png`
  const twitterIcon = `${process.env.PUBLIC_URL}/icons/twitter.png`
  const instaIcon = `${process.env.PUBLIC_URL}/icons/insta.png`

  return (
    <div className="App-foot-section">
      <Stack direction="row" sx={{ p: 20 }}>
        <Button>
          <img
            src={oddbodyLogo}
            alt=""
            width="80px"
            style={{paddingRight: 30}}
          />
        </Button>
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
        <Stack direction="row">
          <Stack sx={{ paddingRight: '20px' }}>
            <div style={{ textAlign: 'left' }}>Contact Us</div>
            <div style={{ color: 'grey', textAlign: 'left', fontSize: '10px', paddingTop: '10px' }}>
              plumplum01@pusan.ac.kr
            </div>
          </Stack>
          <Button>
            <img
              src={openSeaIcon}
              alt=""
              width="30px"
            />
          </Button>
          <Button>
            <img
              src={twitterIcon}
              alt=""
              width="30px"
            />
          </Button>
          <Button>
            <img
              src={instaIcon}
              alt=""
              width="30px"
            />
          </Button>
        </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default FootSection;