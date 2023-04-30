import React, {useState} from 'react';
import { Stack, Button } from '@mui/material';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next'

const BuySection: React.FC = () => {
  const { t }  = useTranslation(['page'])
  const [isListHover, setIsListHover] = useState(false);
  const ticket = `${process.env.PUBLIC_URL}/images/ticket.png`
  const hoverTicket = `${process.env.PUBLIC_URL}/images/hover_ticket.png`

  function handleOpensea() {
    var openNewWindow = window.open("about:blank");
    if(openNewWindow)
      openNewWindow.location.href = "https://opensea.io/collection/odby";
  }

  return (
    <div 
      className="App-section"
      data-aos="fade-up"
      data-aos-delay="50" 
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
          sx={{pt: 7}}
          onClick={handleOpensea}
        >
          <Stack 
            direction = "row"
            onMouseEnter={() => setIsListHover(true)}
            onMouseLeave={() => setIsListHover(false)}
          >
            <img
              className='ticket_img'
              src={isListHover ? hoverTicket : ticket}
              alt=""
            >
            </img>
          </Stack>
        </Button>
      }
      <Stack
        sx={{p: isMobile? 5 : 10, pb: isMobile? 20 : 10, minWidth: isMobile? 'auto' : '850px', width: isMobile? '80vw' : '50vw' }}
      >
        <span 
          className="-ODBYODD-BODY-"
        >
          <span>{t('page:buy.text1')}</span><br />< br />
          <span>{t('page:buy.text2')}</span><br />< br />
          <span>{t('page:buy.text3')}</span>
        </span>
      </Stack>
    </div >
  );
};

export default BuySection;