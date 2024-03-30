import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { easeInOut } from 'framer-motion';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);



function Dial() {

    const box = useRef(null);
    const active = 4;

    useEffect(() => {
        const mncircles = document.querySelectorAll(".mncircle");

        if (mncircles.length > 0) {
            mncircles.forEach((val) => {
                val.addEventListener("click", handleClick);
            });
        }

        return () => {
            if (mncircles.length > 0) {
                mncircles.forEach((val) => {
                    val.removeEventListener("click", handleClick);
                });
            }
        };
    }, []); 

    useEffect(() => {
        gsap.to('#circle', {
            rotate: 0,
            ease: easeInOut, 
            duration: 2,
            scrollTrigger: {
                trigger: box.current,
                start: "top 80%", 
                end:"top 15%",
                scrub: true, 
            }
        });

        const mncircles = document.querySelectorAll(".mncircle");
        if (mncircles && mncircles[active - 1]) {
            gsap.to(mncircles[active - 1], {
                opacity: 0.8
            });
        }
    }, [active]);

    const handleClick = (event) => {
        const mncircles = document.querySelectorAll(".mncircle");
        const index = Array.from(mncircles).indexOf(event.target);
        gsap.to("#circle", {
            rotate: (4 - (index + 1)) * 15 
        });
        greyout();
        gsap.to(event.target, {
            opacity: 0.7
        });

        const target = event.target.closest('.second');
        if (target) {
            gsap.to(target, {
                opacity: 1
            });
        }
    };

    const greyout = () => {
        const mncircles = document.querySelectorAll(".mncircle");
        mncircles.forEach(circle => {
            gsap.to(circle, {
                opacity: 0.1
            });
        });
        const seconds = document.querySelectorAll(".second");
        seconds.forEach(circle => {
            gsap.to(circle, {
                opacity: 1
            });
        });
    };

    return (
        <>
            <div id="main" ref={box}>
                <div id="page1">
                    <div id="circle">
                        <div class="strip no1">

                            <div class="first">
                                <div class="dot"></div>
                            </div>
                            <div class="second">

                                <Link to="/first-sem" className="dial-link">First Sem</Link>
                            </div>

                        </div>
                        <div class="strip no2">

                            <div class="first">
                                <div class="dot"></div>
                            </div>
                            <div class="second">
                            <Link to="/second-sem" className="dial-link">Second Sem</Link>
                            </div>

                        </div>
                        <div class="strip no3">

                            <div class="first">
                                <div class="dot"></div>
                            </div>
                            <div class="second">

                            <Link to="/third-sem" className="dial-link">Third Sem</Link>
                            </div>
                        </div>
                        <div class="strip no4">
                            <div class="first">
                                <div class="dot"></div>
                            </div>
                            <div class="second">
                            <Link to="/fourth-sem" className="dial-link">Fourth Sem</Link>
                            </div>
                        </div>
                        <div class="strip no5">

                            <div class="first">
                                <div class="dot"></div>
                            </div>
                            <div class="second">
                            <Link to="/fifth-sem" className="dial-link">Fifth Sem</Link>
                            </div>
                        </div>
                        <div class="strip no6">

                            <div class="first">
                                <div class="dot"></div>
                            </div>
                            <div class="second">
                            <Link to="/sixth-sem" className="dial-link">Sixth Sem</Link>
                            </div>
                        </div>
                        <div class="strip no7">

                            <div class="first">
                                <div class="dot"></div>
                            </div>
                            <div class="second">
                            <Link to="/seventh-sem" className="dial-link">Seventh Sem</Link>
                            </div>
                        </div>
                        <div class="strip no8">
                            <div class="first">
                                <div class="dot"></div>
                            </div>
                            <div class="second">
                            <Link to="/eight-sem" className="dial-link">Eight Sem</Link>
                            </div>
                        </div>
                    </div>
                    <div id="panel">
                        <div className="mncircle"></div>
                        <div className="mncircle"></div>
                        <div className="mncircle"></div>
                        <div className="mncircle"></div>
                        <div className="mncircle"></div>
                        <div className="mncircle"></div>
                        <div className="mncircle"></div>
                        <div className="mncircle"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dial