import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { easeInOut } from 'framer-motion';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react';
import reactLogo from '../assets/react-logo.json';
import upArrow from '../assets/uparrow.json'
import downArrow from '../assets/downarrow.json'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Dial() {

    const box = useRef(null);
    const upwardArrow = useRef(null);
    const downwardArrow = useRef(null);
  

    useEffect(() => {
        const handleUpwardArrowClick = () => {
            const currentRotation = gsap.getProperty("#circle", "rotate") || 0;
            const newRotation = Math.min(currentRotation + 15, 45);
            gsap.to("#circle", {
                rotate: newRotation
            });
        };
        
        const handleDownwardArrowClick = () => {
            const currentRotation = gsap.getProperty("#circle", "rotate") || 0;
            const newRotation = Math.max(currentRotation - 15, -60);
            gsap.to("#circle", {
                rotate: newRotation
            });
        };
    
        const upwardArrowRef = upwardArrow.current;
        const downwardArrowRef = downwardArrow.current;
    
        upwardArrowRef?.addEventListener("click", handleUpwardArrowClick);
        downwardArrowRef?.addEventListener("click", handleDownwardArrowClick);
    
        return () => {
            upwardArrowRef?.removeEventListener("click", handleUpwardArrowClick);
            downwardArrowRef?.removeEventListener("click", handleDownwardArrowClick);
        };
    }, []);

    useEffect(() => {
        gsap.to('#circle', {
            rotate: 0,
            ease: easeInOut,
            duration: 2,
            scrollTrigger: {
                trigger: box.current,
                start: "top 90%",
                end: "top 25%",
                scrub: true,
            }
        });
    }, []);

    return (
        <>
            <div id="main" ref={box}>
                <div id="page1">
                    <div id="circle">
                        <div className="strip no1">

                            <div className="first">
                                <div className="dot"></div>
                            </div>
                            <div className="second">

                                <Link to="/first-sem" className="dial-link">First Sem</Link>
                            </div>

                        </div>
                        <div className="strip no2">

                            <div className="first">
                                <div className="dot"></div>
                            </div>
                            <div className="second">
                                <Link to="/second-sem" className="dial-link">Second Sem</Link>
                            </div>

                        </div>
                        <div className="strip no3">

                            <div className="first">
                                <div className="dot"></div>
                            </div>
                            <div className="second">

                                <Link to="/third-sem" className="dial-link">Third Sem</Link>
                            </div>
                        </div>
                        <div className="strip no4">
                            <div className="first">
                                <div className="dot"></div>
                            </div>
                            <div className="second">
                                <Link to="/fourth-sem" className="dial-link">Fourth Sem</Link>
                            </div>
                        </div>
                        <div className="strip no5">

                            <div className="first">
                                <div className="dot"></div>
                            </div>
                            <div className="second">
                                <Link to="/fifth-sem" className="dial-link">Fifth Sem</Link>
                            </div>
                        </div>
                        <div className="strip no6">

                            <div className="first">
                                <div className="dot"></div>
                            </div>
                            <div className="second">
                                <Link to="/sixth-sem" className="dial-link">Sixth Sem</Link>
                            </div>
                        </div>
                        <div className="strip no7">

                            <div className="first">
                                <div className="dot"></div>
                            </div>
                            <div className="second">
                                <Link to="/seventh-sem" className="dial-link">Seventh Sem</Link>
                            </div>
                        </div>
                        <div className="strip no8">
                            <div className="first">
                                <div className="dot"></div>
                            </div>
                            <div className="second">
                                <Link to="/eight-sem" className="dial-link">Eight Sem</Link>
                            </div>
                        </div>

                    </div>
                    <div id="panel">
                        <div className="mncircle" ref={upwardArrow}>
                            <Lottie animationData={upArrow}/>
                        </div>
                        <div className="mncircle" ref={downwardArrow}>
                        <Lottie animationData={downArrow}/>
                        </div>
                    </div>
                    <Lottie className='reactLogo' animationData={reactLogo} />
                </div>
            </div>
        </>
    )
}

export default Dial