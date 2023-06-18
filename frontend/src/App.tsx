import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoticePage from './pages/notice/NoticePage';
import RootPage from './pages/root/RootPage';

function App() {
  useEffect(() => {
    if(window.location.href === 'http://oddbody.art' || window.location.href === 'http://oddbody.art/') 
      window.location.href='https://www.oddbody.art';
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/notice" element={<NoticePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;