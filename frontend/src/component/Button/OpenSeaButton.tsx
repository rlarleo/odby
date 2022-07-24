import React, { useState } from 'react';
import { Box, Stack, Button } from '@mui/material';
import { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: 'white',
  borderColor: 'white',
  backgroundColor: 'black',
  padding: '12px 30px',
  borderRadius: '10px',
  fontSize: '15px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'grey',
    borderColor: 'white',
  },
}));

const OpenSeaButton: React.FC = () => {
  const [isListHover, setIsListHover] = useState(false);
  const openSeaIcon = `${process.env.PUBLIC_URL}/icons/opensea.png`
  return (
    <div
      className='App-button'
      onMouseEnter={() => setIsListHover(true)}
      onMouseLeave={() => setIsListHover(false)}
    >
      <ColorButton
        onClick={() => window.open('https://opensea.io/', '_blank')}
      >
        on opensea &nbsp;
        <img
          src={isListHover ? openSeaIcon : openSeaIcon}
          alt=""
          width="30px"
        />
      </ColorButton> 
    </div>
  );
};

export default OpenSeaButton;