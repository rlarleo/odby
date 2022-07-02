import React, { useState } from 'react';

const OpenSeaButton: React.FC = () => {
  const [isListHover, setIsListHover] = useState(false);
  const image1 = `${process.env.PUBLIC_URL}/logo192.png`
  const image2 = `${process.env.PUBLIC_URL}/logo193.png`
  return (
    <div
      className='App-button'
      onMouseEnter={() => setIsListHover(true)}
      onMouseLeave={() => setIsListHover(false)}
    >
      <img
        src={isListHover ? image1 : image2}
        alt=""
        onClick={() => window.open('https://opensea.io/', '_blank')}
      />
    </div>
  );
};

export default OpenSeaButton;