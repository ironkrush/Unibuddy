import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FirstSem from './pages/FirstSem';
import SecondSem from './pages/SecondSem';
import ThirdSem from './pages/ThirdSem';
import FourthSem from './pages/FourthSem';
import FifthSem from './pages/FifthSem';
import SixthSem from './pages/SixthSem';
import SeventhSem from './pages/SeventhSem';
import EightSem from './pages/EightSem';
import Content from './components/Content';

function App() {
  return (
    <>
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/firstsem" element={<FirstSem />} />
        <Route path="/secondsem" element={<SecondSem />} />
        <Route path="/thirdsem" element={<ThirdSem />} />
        <Route path="/fourthsem" element={<FourthSem />} />
        <Route path="/fifthsem" element={<FifthSem />} />
        <Route path="/sixthsem" element={<SixthSem />} />
        <Route path="/seventhsem" element={<SeventhSem />} />
        <Route path="/eightsem" element={<EightSem />} />
        <Route path="/firstsem/:id" element={<Content />} />
        <Route path="/secondsem/:id" element={<Content />} />
        <Route path="/thirdsem/:id" element={<Content />} />
        <Route path="/fourthsem/:id" element={<Content />} />
        <Route path="/fifthsem/:id" element={<Content />} />
        <Route path="/sixthsem/:id" element={<Content />} />
        <Route path="/seventhsem/:id" element={<Content />} />
        <Route path="/eightsem/:id" element={<Content />} />
      </Routes>
    </Router>
    
     </>
  );
}

export default App;
