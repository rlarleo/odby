import { Button, Stack } from '@mui/material';
import { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import i18n from "i18next";
import '../../i18n/index.js'



const TranslateButton: React.FC = () => {
  const openSeaIcon = `${process.env.PUBLIC_URL}/icons/opensea.png`
  const twitterIcon = `${process.env.PUBLIC_URL}/icons/twitter.png`
  const instaIcon = `${process.env.PUBLIC_URL}/icons/insta.png`
  const spatialIcon = `${process.env.PUBLIC_URL}/icons/spatial.png`

  function handleOpensea() {
    var openNewWindow = window.open("about:blank");
    if(openNewWindow)
      openNewWindow.location.href = "https://opensea.io/collection/odby";
  }
  

  return (
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
        onClick={() => window.open('https://spatial.io/s/ODBYs-Immersive-Place-62fcb86677f41c00017d52a9?share=5271407935954179074', '_blank')}
      >
        <img
          src={spatialIcon}
          alt=""
          width="30px"
        />
      </Button>
    </Stack>
  );
};

export default TranslateButton;