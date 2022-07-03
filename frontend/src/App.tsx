import HeroBanner from './Sections/HeroBanner';
import IntroSection from './Sections/IntroSection';
import VideoSection from './Sections/VideoSection';
import FootSection from './Sections/FootSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroBanner />
      <IntroSection />
      <VideoSection />
      <FootSection />
    </div>
  );
}

export default App;