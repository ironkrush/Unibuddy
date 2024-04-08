import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Lottie from 'lottie-react';
import ytLogo from '../assets/ytlogo.json';

function Content() {
  const { id } = useParams();
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [youtubeLoaded, setYoutubeLoaded] = useState(false);
  const pdfRef = useRef(null);
  const youtubeRef = useRef(null);

  useEffect(() => {
    const pdfObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPdfLoaded(true);
          pdfObserver.unobserve(entry.target);
        }
      });
    });

    const youtubeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setYoutubeLoaded(true);
          youtubeObserver.unobserve(entry.target);
        }
      });
    });

    if (pdfRef.current) {
      pdfObserver.observe(pdfRef.current);
    }
    if (youtubeRef.current) {
      youtubeObserver.observe(youtubeRef.current);
    }

    return () => {
      if (pdfRef.current) {
        pdfObserver.unobserve(pdfRef.current);
      }
      if (youtubeRef.current) {
        youtubeObserver.unobserve(youtubeRef.current);
      }
    };
  }, []);
// inorder to remove toolbar use the code #toolbar=0 behind every pdf path 


  const subjectData = {
    1: {
      pdfLink: "/Papers/Sem1Maths.pdf#toolbar=0",
      youtubeLinks: [
        "https://youtube.com/playlist?list=PLvDFTOvV1tapwV_9bgZk33_J_aVlNZloS&si=PgF4cmpFP5gsDGpM"
      ]
    },
    2: {
      pdfLink: "/Papers/Sem1Fop.pdf#toolbar=0",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video3",
        "https://www.youtube.com/watch?v=video4",

      ]
    },
    3: {
      pdfLink: "/Papers/Sem1Civil.pdf#toolbar=0",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",

      ]
    },
    4: {
      pdfLink: "/Papers/Sem1Eg.pdf#toolbar=0",
      youtubeLinks: [
        "https://www.youtube.com/playlist?list=PLDN15nk5uLiC9wFOTiDp8ekWAf40BwSct",
        "https://www.youtube.com/playlist?list=PLDN15nk5uLiBpnIOK5r3KXdfFOVzGHJSt",
        "https://www.youtube.com/playlist?list=PLDN15nk5uLiBVR22X01vcnvVCuQIklXGx",
        "https://www.youtube.com/playlist?list=PLDN15nk5uLiCha1twnQDker0lDD8AfONO"
      ]
    },
    5: {
      pdfLink: "/Papers/Sem1Fop.pdf#toolbar=0",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",

      ]
    },
    6: {
      pdfLink: "/Papers/Sem1Es.pdf#toolbar=0",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=video5",
        "https://www.youtube.com/watch?v=video6",

      ]
    },
    7: {
      pdfLink: "",
      youtubeLinks: [
        "https://youtube.com/playlist?list=PLvDFTOvV1taqemRwqZKY2jmNV4RDRBNXy&si=YA9f75AAq7DjPBpT",
        "https://www.youtube.com/watch?v=1XlT3Y2oyAU&list=PLU6SqdYcYsfJOGZdxUpDk3w9o-w94-RoG",
        "https://www.youtube.com/watch?v=saHIoDylUTE&list=PLU4tRlorU5wVmcfWCM8gkaTQVjdZn3Fc4&pp=iAQB",
        "https://www.youtube.com/watch?v=fupOsH1YYkI&list=PLNKD1qB9pptvVqDg21UAS0vkid7tVUI2G",
        "https://www.youtube.com/watch?v=kBcbHNxBYYc&list=PLNKD1qB9pptvChojmxoKPe8bU7jTNmTNT",
        "https://www.youtube.com/watch?v=NAJuuEKwOIQ&list=PLT3bOBUU3L9hvSQJ1XqJIcxZPyo5sNwj_&pp=iAQB",
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
      pdfLink: "/Papers/Sem3Decrete.pdf#toolbar=0",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=ynHoB_0li_o&list=PLT3bOBUU3L9gF5nz4y1j2lb6q6IDbA6PQ",
        "https://www.youtube.com/watch?v=g5c7xKcNWr0&list=PL15h-I4HvELJSw75O2ZVe0BKEQuzWBigB",
        "https://www.youtube.com/watch?v=7S6jHzi8vkk&list=PL2CBNT74dss_V4jKKgMTh9IP-pSjzxe89",
        "https://www.youtube.com/watch?v=UP2SX1aLJ60&list=PLT3bOBUU3L9hF90HlMkgIHAm5kecjmK_X&pp=iAQB",
        "https://www.youtube.com/playlist?list=PLU6SqdYcYsfLV24T0XVb3z3mjl8QG0EBN",

      ]
    },
    14: {
      pdfLink: "/Papers/Sem3Dsa.pdf#toolbar=0",
      youtubeLinks: [
        "https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi"
      ]
    },
    15: {
      pdfLink: "/Papers/Sem3De.pdf#toolbar=0",
      youtubeLinks: [
        "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm"
      ]
    },
    16: {
      pdfLink: "/Papers/Sem3itw.pdf#toolbar=0",
      youtubeLinks: [
        "https://youtube.com/playlist?list=PLo6pcfMH2eBr4rB1ztAFwoqBwFGbqoB-f&si=g5N4BUqplCkW_xRn",
        "https://youtube.com/playlist?list=PLo6pcfMH2eBrPql0h-h-sWR4DkrEHGa4e&si=o1yn1O86sUy_6u0d",

      ]
    },
    17: {
      pdfLink: "/Papers/Sem3Dbms.pdf#toolbar=0",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=6Iu45VZGQDk&list=PLBlnK6fEyqRi_CUQ-FXxgzKQ1dwr_ZJWZ"

      ]
    },
    18: {
      pdfLink: "/Papers/Sem4Pom.pdf#toolbar=0",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=vOykcERGw9Y&list=PLLy_2iUCG87DH0iQSVWZ8iamVl5SaLlXQ"
      ]
    },
    19: {
      pdfLink: "/Papers/Sem4Psnm.pdf#toolbar=0",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=V3iEsLPAD68&list=PLU6SqdYcYsfLRq3tu-g_hvkHDcorrtcBK"

      ]
    },
    20: {
      pdfLink: "/Papers/Sem4Coa.pdf#toolbar=0",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=Ol8D69VKX2k&list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q"

      ]
    },
    21: {
      pdfLink: "/Papers/Sem4Os.pdf#toolbar=0",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=vBURTt97EkA&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O"

      ]
    },
    22: {
      pdfLink: "/Papers/Sem4Oopj.pdf#toolbar=0",
      youtubeLinks: [
        "https://www.youtube.com/watch?v=AEo4KgwKYoU&list=PLqleLpAMfxGCbdaJ6SoExDfHrTfRDeWeG"
      ]
    },
    23: {
      pdfLink: "/Papers/Sem5SE.pdf#toolbar=0",
      youtubeLinks: [
        "https://youtube.com/playlist?list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2&si=L0PzSe_2YKDpHPyS"

      ]
    },
    24: {
      pdfLink: "/Papers/Sem5TOC.pdf#toolbar=0",
      youtubeLinks: [
        "https://youtube.com/playlist?list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev&si=z0gLRWVCDMvc2DaE"

      ]
    },
    25: {
      pdfLink: "/Papers/Sem5DAA.pdf#toolbar=0",
      youtubeLinks: [
        "https://youtube.com/playlist?list=PLYwpaL_SFmcBOrMihdkd48kgs6_YP8taa&si=y2PVQN7-AFRcHlQP"

      ]
    },
    26: {
      pdfLink: "/Papers/Sem5CN.pdf#toolbar=0",
      youtubeLinks: [
        "https://youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&si=kJ1nkkedIC5Zg8fG"
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
      pdfLink: "/Papers/Sem5Map.pdf#toolbar=0",
      youtubeLinks: [
        "https://youtube.com/playlist?list=PLxCzCOWd7aiHL7mF_dRsj4Q9x1NNaZqkh&si=sjxgklf2tDoAm6To"
      ]
    },
    30: {
      pdfLink: "/Papers/Sem6AI.pdf#toolbar=0",
      youtubeLinks: [
        "https://youtube.com/playlist?list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&si=W7bXuNqOMwGD4BYf"

      ]
    },
    31: {
      pdfLink: "/Papers/Sem6Python.pdf#toolbar=0",
      youtubeLinks: [
        "https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&si=CECyyV61YwIb1lSb"

      ]
    },
    32: {
      pdfLink: "/Papers/Sem6CNS.pdf#toolbar=0",
      youtubeLinks: [
        "https://youtube.com/playlist?list=PLBlnK6fEyqRgJU3EsOYDTW7m6SUmW6kII&si=BMxmJsSOEznsXYzR"

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
        "https://youtube.com/playlist?list=PL1QH9gyQXfguPNDTsnG90W2kBDQpYLDQr&si=8CSDZRP7HtxznNFO"

      ]
    },
    36: {
      pdfLink: "",
      youtubeLinks: [
        "https://youtube.com/playlist?list=PL5koSNwRQrpmkJW_PSkPfLnklSeuxo7B1&si=_dvdLLQsV3pBAX08"

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
        "https://youtube.com/playlist?list=PLS_KljRaS291KD6CrQctTAQncp681S9B9&si=o6kXKvd2ltkCv9-j"
      ]
    },
    40: {
      pdfLink: "",
      youtubeLinks: [
        "https://youtube.com/playlist?list=PLPIwNooIb9vi4f8tVkzLnr1tll6Pubbqh&si=eQWi8A48NTGIHJVg"
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
  const { pdfLink, youtubeLinks } = subjectData[id] || {};

  const pdfIframe =pdfLoaded && pdfLink && (
    <iframe
    className='pdf'
    src={pdfLink}
      width="80%"
      height="400px"
      allowFullScreen
      title="PDF Viewer"
    ></iframe>
  );

  const youtubeLinksElements = youtubeLoaded && youtubeLinks && youtubeLinks.map((link, index) => (
    <div key={index} className='yt-link'>
      <a className='yt-title' href={link} target="_blank" rel="noopener noreferrer"> <Lottie animationData={ytLogo} id='ytlogo' /> Collection {index + 1}</a>
    </div>
  ));

  return (
    <div>
    
      <div id='inside'>
      <h1 className="headcontent">Previous Year Papers</h1>
        <div id="pyq" ref={pdfRef}>
          {pdfIframe}
          
        </div>
        <h1 className='headcontent'>Video Lectures</h1>
        <div id="video-cont" ref={youtubeRef}>
          {youtubeLinksElements}
        </div>
      </div>
    </div>
  );
}
export default Content;