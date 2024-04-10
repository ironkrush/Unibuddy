import React, { useEffect, useRef } from 'react';
import enhanceText from '../components/Enhance';
import Dial from '../components/Dial'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { easeInOut } from 'framer-motion';
import Loader from '../components/Loader';
import Footer from '../components/Footer';
import { Analytics } from "@vercel/analytics/react"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const box = useRef(null);

  useEffect(() => {
    const element = box.current;
  
    gsap.set(element, { opacity: 2 });

    gsap.to(element, {
      opacity: 0.3,
      duration: 5,
      ease: easeInOut,
      scrollTrigger: {
        trigger: element,
        start: 'top 35%', 
        end: 'bottom top',
        scrub: true, 
      },
    });
  }, []);

  useEffect(() => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(() => {
        move();
      });
    }

    const moveHandler = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener('mousemove', moveHandler);

    move();

    return () => {
      window.removeEventListener('mousemove', moveHandler);
    };
  }, []);

  useEffect(() => {
    enhanceText("channel-link");
  }, []);

  return (
    <>

      <div className="gradient-bg" ref={box}>
        <Loader className="loader"/>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
        <Analytics />
        <div className="home">
          <div className="text">
            <div className="line">
              <p className="word">A</p>
              <p className="word">Gift</p>
            </div>
            <div className="line">
              <p className="word">From</p>
            </div>
            <div className="line">
              <p
                id="channel-link"
                className="word fancy"
              >
                Asynchroners!
              </p>
            </div>
          </div>
        </div >
      </div>

      <Dial />
      <Footer />
    </>
  );
}

export default Home;
