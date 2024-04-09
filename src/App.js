import React, { useEffect, useState } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <>
        <div>
          <div className="ag-space">
            <div className="ag-format-container">
              <div className="ag-robot_platform">
                <div className="ag-robot"></div>
              </div>
              <div id="parentofcard">
              <div className="botcard">
                <div className="botcard-info">
                  <p className="bottitle">Please visit our website in your Computer</p>
                </div>
              </div>
              </div>
              <div className="ag-planet"></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
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
  );
}

export default App;
