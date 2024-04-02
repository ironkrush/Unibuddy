import React, { useEffect } from 'react';
import enhanceText from '../components/Enhance';
import Dial from '../components/Dial'

function Home() {
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
      
      <div className="gradient-bg">
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

      <Dial/>
    </>
  );
}

export default Home;
