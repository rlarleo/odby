import HeroBanner from './Sections/HeroBanner';
import IntroSection from './Sections/IntroSection';
import VideoSection from './Sections/VideoSection';
import FootSection from './Sections/FootSection';
import './App.css';
import Axios from 'axios';

Axios.defaults.baseURL = process.env.REACT_APP_API_SERVER;
console.log(process.env.REACT_APP_API_SERVER)
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