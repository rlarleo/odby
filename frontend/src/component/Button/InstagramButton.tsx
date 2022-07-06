import React, { useState } from 'react';

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
      <img
        src={isListHover ? image1 : image2}
        alt=""
        width="300px"
        onClick={() => window.open('https://www.instagram.com/', '_blank')}
      />
    </div>
  );
};

export default InstagramButton;