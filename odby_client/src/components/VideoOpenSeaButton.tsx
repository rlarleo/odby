import React, { useState } from 'react';

type ButtonProps = {
  url: string;
};

const VideoOpenSeaButton: React.FC<ButtonProps> = ({ url }) => {
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
        onClick={() => window.open(url, '_blank')}
      />
    </div>
  );
};

export default VideoOpenSeaButton;