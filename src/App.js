import React, { useState, useEffect } from 'react';
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


import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// refrenece link : https://github.com/wojtekmaj/react-pdf/blob/main/sample/create-react-app-5/src/Sample.tsx
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};
const maxWidth = 1200;
function App() {

  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }
  return (
    <>
      <Document file={'https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf'} onLoadSuccess={onDocumentLoadSuccess} options={options} >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={maxWidth}
          />
        ))}
      </Document>

      {/* <Router>
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
    </Router> */}

    </>
  );
}

export default App;
