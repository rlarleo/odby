import React from 'react';

const PageLogo: React.FC = () => {
  const logo = `${process.env.PUBLIC_URL}/images/PageLogo.png`
  return (
    <img
      src={logo}
      alt=""
      width="270px"
      onClick={() => window.open('https://www.instagram.com/', '_blank')}
    />
  );
};

export default PageLogo;