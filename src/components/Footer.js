import React, { useEffect, useState } from 'react';
import gsap from "gsap";
import Power1 from 'gsap';

function Footer() {
  const [mainStyle, setMainStyle] = useState({
    display: 'none',
    backgroundImage: 'none'
  });

  useEffect(() => {
    const main = document.querySelector("#fixed-image");
    const elem = document.querySelector("#elem-container");

    const handleMouseMove = (event) => {
      gsap.to("#fixed-image", {
        x: event.clientX,
        y: event.clientY,
      });

      gsap.to(main, {
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleMouseEnterElem = () => {
      main.style.display = "block";
    };

    const handleMouseLeaveElem = () => {
      main.style.display = "none";
    };

    const handleMouseEnterPic = (detail) => {
      main.style.backgroundImage = `url(${detail})`;
    };

    const bindPicEvents = (picId) => {
      const pic = document.querySelector(`#${picId}`);
      pic.addEventListener("mouseenter", () => handleMouseEnterPic(pic.getAttribute("data-image")));
    };

    bindPicEvents("pic1");
    bindPicEvents("pic2");
    bindPicEvents("pic3");

    document.addEventListener("mousemove", handleMouseMove);
    elem.addEventListener("mouseenter", handleMouseEnterElem);
    elem.addEventListener("mouseleave", handleMouseLeaveElem);

    gsap.to('#fixed-image', {
      y: 0,
      duration: 1,
      ease: Power1,
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      elem.removeEventListener("mouseenter", handleMouseEnterElem);
      elem.removeEventListener("mouseleave", handleMouseLeaveElem);
      ["pic1", "pic2", "pic3"].forEach(picId => {
        const pic = document.querySelector(`#${picId}`);
        if (pic) {
          pic.removeEventListener("mouseenter", () => handleMouseEnterPic(pic.getAttribute("data-image")));
        }
      });
    };
  }, []);

  return (
    <>
      <div id="footbody">
        <div id="fixed-image" style={mainStyle}></div>
        <div className="card"> <div className="gamete"></div>
          <h1 id="involve">PEOPLE WHO INVOLVED</h1>
          <div id="elem-container">
            <div className="elem" id="pic1" data-image="megh.png">
              <div className="overlay"></div>
              <div className="emojis">
                <h3>MEGH PATEL</h3>
                <h1>🌧</h1>
              </div>
            </div>
            <div className="elem" id="pic2" data-image="AGNIVESH.jpg">
              <div className="overlay"></div>
              <div className="emojis">
                <h3>AGNIVESH</h3>
                <h1>🔥</h1>
              </div>
            </div>
            <div className="elem" id="pic3" data-image="https://images.unsplash.com/photo-1712081024208-f04e1956d736?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D">
              <div className="overlay"></div>
              <div className="emojis">
                <h3>OM PATEL</h3>
                <h1>💣</h1>
              </div>
            </div>
          </div>
        </div>
        <footer id="footer">
          <div className="col col1">
            <h1>Prepzilla</h1>
            <p id="text">Made with <span style={{ color: '#BA6573' }}>❤<br /></span>Under The Management OF INFFY</p>
            <div className="social">
              <a href="https://www.instagram.com/the_company_inffy/" target="_blank" className="link"><img
                src="insta.png" style={{ height: '2vw', width: '2vw' }} alt="" /></a>
              <a href="https://twitter.com/juxtopposed" target="_blank" className="link"><img
                src="https://assets.codepen.io/9051928/x.png" alt="" /></a>
              <a href="https://youtube.com/@juxtopposed" target="_blank" className="link"><img
                src="email.png" style={{ height: '4vw', width: '4vw' }} /></a>
            </div>
            <p style={{ color: '#818181', fontSize: 'smaller' }}>2024 © All Rights Reserved</p>
          </div>
          <div className="backdrop"></div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
