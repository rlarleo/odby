import React from 'react';
import FadeIn from '../component/Fade/FadeIn'; // Import react-reveal(Fade)

const IntroSection: React.FC = () => {
  const image = `${process.env.PUBLIC_URL}/images/OddLogo.png`
  return (
    <div className="App-section">
      <FadeIn> 
        <img src={image} className="App-logo" alt="logo" />
        ODBY(ODD BODY) 는 모션캡쳐 기술을 통해 인간의 신체를 메타버스에<br />
        구현하기 위한 프로젝트이다.<br /><br />
        블라블라
      </FadeIn>
    </div>
  );
};

export default IntroSection;