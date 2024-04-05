import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { easeInOut } from 'framer-motion';

function Loader() {
    const text = "Explore•the•new•world•";
    useEffect(() => {
        gsap.to("#cloud1", {
            x: -4400,
            duration: 3.5,
            delay: 1,
        });

        gsap.to("#cloud2", {
            x: 4400,
            duration: 3.5,
            delay: 1,
        });
        gsap.to(".loadbody",{
            y: -1000,
            opacity:0,
            duration:1,
            delay: 1.3,
            ease:easeInOut
        })
    }, []);
    return (
        <div className="loadbody">
        <div id="mainload">
        <div className="clouds">
            <img src="cloud1.png" alt="cloud" id="cloud1"/>
            <img src="cloud2.png" alt="cloud" id="cloud2"/>
        </div>
            <div id="circleload">
                <div className="textload">
                    <p>{text.split('').map((char, index) => (
                <span key={index} style={{ transform: `rotate(${index * 16.5}deg)` }}>{char}</span>
            ))}</p>
                </div>
                <div id="prep"><img id='loadhead' src="prepzillalogo.png" alt="" /></div>
            </div>
        </div>
        </div>
    )
}

export default Loader;