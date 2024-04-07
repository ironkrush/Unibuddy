import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Lottie from 'lottie-react';
import ytLogo from '../assets/ytlogo.json';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';

GlobalWorkerOptions.workerSrc = '../../node_modules/pdfjs-dist/build/pdf.worker.min.js';



function Content() {
  let { id } = useParams();

  function PDFViewer({ pdfLink }) {
    const canvasRef = useRef(null);

    useEffect(() => {
      const renderPDF = async () => {
        if (!pdfLink || !canvasRef.current) return;

        const loadingTask = getDocument({ url: pdfLink });
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        const viewport = page.getViewport({ scale: 1 });
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };

        await page.render(renderContext).promise;
      };

      renderPDF();
    }, [pdfLink]);

    return <canvas ref={canvasRef} />;
  }
 
  const subjectData  = {
    1: {
      pdfLink: "https://drive.google.com/file/d/13R8iOoJqEp7QDJGX0oipdxUla2FYmAgI/view?usp=sharing",
      youtubeLinks: [
        "https://youtube.com/playlist?list=PLvDFTOvV1tapwV_9bgZk33_J_aVlNZloS&si=PgF4cmpFP5gsDGpM"
      ]
    },
    2: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video3",
        "https://www.youtube.com/watch?v=video4",
       
      ]
    },
    3: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    4: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/playlist?list=PLDN15nk5uLiC9wFOTiDp8ekWAf40BwSct",
        "https://www.youtube.com/playlist?list=PLDN15nk5uLiBpnIOK5r3KXdfFOVzGHJSt",
        "https://www.youtube.com/playlist?list=PLDN15nk5uLiBVR22X01vcnvVCuQIklXGx",
        "https://www.youtube.com/playlist?list=PLDN15nk5uLiCha1twnQDker0lDD8AfONO"   
      ]
    },
    5: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    6: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    7: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
      ]
    },
    8: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    9: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    10: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    11: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    12: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    13: {
      pdfLink: "https://drive.google.com/file/d/1TjngRzmn3GFKRISLSgosa35yv7eL7o2E/view?usp=sharing",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    14: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6"
      ]
    },
    15: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",      
      ]
    },
    16: {
      pdfLink: "https://drive.google.com/file/d/1OTz3-udPZu0Hcj1G9tDzbzW3OgHQK-nT/view?usp=drive_link",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    17: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    18: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    19: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    20: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    21: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    22: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        "https://www.youtube.com/watch?v=video5"
       
      ]
    },
    23: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    24: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    25: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    26: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    27: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    28: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    29: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    30: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    31: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    32: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    33: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    34: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    35: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    36: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    37: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
       
      ]
    },
    38: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",

      ]
    },
    39: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
      ]
    },
    40: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
      ]
    },
    41: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
      ]
    },
    42: {
      pdfLink: "",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
      ]
    },
  };
  
  const { pdfLink, youtubeLinks } = subjectData[id];

  const youtubeLinksElements = youtubeLinks.map((link, index) => (
    <div key={index} className='yt-link'>
      <a className='yt-title' href={link} target="_blank" rel="noopener noreferrer">
        <Lottie animationData={ytLogo} id='ytlogo'/> Collection {index + 1}
      </a> 
    </div>
  ));

  const pdfIframe = pdfLink ? <PDFViewer pdfLink={pdfLink} /> : null;

  return (
    <div id='inside'>
      <h1 className='headcontent'>Previous Year Papers</h1>
      <div id="pyq">
        {pdfIframe}
      </div>
      <h1 className='headcontent'>Video Lectures</h1>
      <div id="video-cont">
        {youtubeLinksElements}
      </div>
    </div>
  );
}

export default Content;