import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FirstYear from './pages/FirstYear';
import SecondYear from './pages/SecondYear';
import ThirdYear from './pages/ThirdYear';
import FourthYear from './pages/FourthYear';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Header />
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/first-year" element={<FirstYear />} />
        <Route path="/second-year" element={<SecondYear />} />
        <Route path="/third-year" element={<ThirdYear />} />
        <Route path="/fourth-year" element={<FourthYear />} />
      </Routes>
    </Router>
     <Footer />
     </>
  );
}

export default App;
