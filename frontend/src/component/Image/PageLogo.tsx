import React from 'react';
import { isMobile } from 'react-device-detect';

const PageLogo: React.FC = () => {
  const logo = `${process.env.PUBLIC_URL}/images/PageLogo.png`
  return (
    <div
      style={{paddingBottom: '20px'}}
      data-aos="fade-down"
    >
      <img
        src={logo}
        alt=""
        width={isMobile? '100px' : '270px'}
        // onClick={() => window.open('https://www.instagram.com/', '_blank')}
      />
    </div>
  );
};

export default PageLogo;