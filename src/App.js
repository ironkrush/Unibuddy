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
import Header from './components/Header';
import Footer from './components/Footer';
import EightSem from './pages/EightSem';

function App() {
  return (
    <>
    <Header />
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/first-sem" element={<FirstSem />} />
        <Route path="/second-sem" element={<SecondSem />} />
        <Route path="/third-sem" element={<ThirdSem />} />
        <Route path="/fourth-sem" element={<FourthSem />} />
        <Route path="/fifth-sem" element={<FifthSem />} />
        <Route path="/sixth-sem" element={<SixthSem />} />
        <Route path="/seventh-sem" element={<SeventhSem />} />
        <Route path="/eight-sem" element={<EightSem />} />
      </Routes>
    </Router>
     <Footer />
     </>
  );
}

export default App;
