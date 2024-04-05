import React from 'react';
import { useParams } from 'react-router-dom';
import Lottie from 'lottie-react';
import ytLogo from '../assets/ytlogo.json'

function Content() {
 
  let { id } = useParams();
  
 
  const subjectData  = {
    1: {
      pdfLink: "https://drive.google.com/file/d/13R8iOoJqEp7QDJGX0oipdxUla2FYmAgI/view?usp=sharing",
      youtubeLinks: [
        "https://youtube.com/playlist?list=PLvDFTOvV1tapwV_9bgZk33_J_aVlNZloS&si=PgF4cmpFP5gsDGpM"
      ]
    },
    2: {
      pdfLink: "/pdf/fundamental_of_programming.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video3",
        "https://www.youtube.com/watch?v=video4",
       
      ]
    },
    3: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    4: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    5: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    6: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    7: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    8: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    9: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    10: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    11: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    12: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    13: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    14: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    15: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    16: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    17: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    18: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    19: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    20: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    21: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    22: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        "https://www.youtube.com/watch?v=video5"
        // Add more YouTube video links as needed
      ]
    },
    23: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    24: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    25: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    26: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    27: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    28: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    29: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    30: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    31: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    32: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    33: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    34: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    35: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    36: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    37: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    38: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    39: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    40: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    41: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
    42: {
      pdfLink: "/pdf/elements_of_civil_engineering.pdf",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",
        // Add more YouTube video links as needed
      ]
    },
  };
  const { pdfLink, youtubeLinks } = subjectData[id];

  const pdfIframe = (
    <iframe
    className='pdf'
      src={pdfLink}
      width="80%"
      height="400px"
      allowFullScreen
      title="PDF Viewer"
    ></iframe>
  );
 
  const youtubeLinksElements = youtubeLinks.map((link, index) => (
    <div key={index} className='yt-link'>
    <a className='yt-title' href={link} target="_blank" rel="noopener noreferrer"> <Lottie animationData={ytLogo} id='ytlogo'/> Collection {index + 1}</a> 
    </div>
  ));

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
