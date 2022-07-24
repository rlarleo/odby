import React, { useState } from 'react';
import { Button } from '@mui/material';

const InstagramButton: React.FC = () => {
  const [isListHover, setIsListHover] = useState(false);
  const image1 = `${process.env.PUBLIC_URL}/images/InstagramButton.png`
  const image2 = `${process.env.PUBLIC_URL}/images/InstagramButton_on.png`
  return (
    <div
      className='App-button'
      onMouseEnter={() => setIsListHover(true)}
      onMouseLeave={() => setIsListHover(false)}
    >
      <Button 
        variant="text"
        sx={{ color: "white", width: "300px", fontWeight: "bold" }}
        size="large"
        onClick={() => window.open('https://www.instagram.com/', '_blank')}
      >
        About Us
      </Button>
    </div>
  );
};

export default InstagramButton;