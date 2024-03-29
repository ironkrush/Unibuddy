import React, { useEffect, useState } from 'react';
import './style.scss';

const InteractiveComponent = () => {
    const [curX, setCurX] = useState(0);
    const [curY, setCurY] = useState(0);
    const [tgX, setTgX] = useState(0);
    const [tgY, setTgY] = useState(0);

    useEffect(() => {
        const move = () => {
            setCurX((prevCurX) => prevCurX + (tgX - prevCurX) / 20);
            setCurY((prevCurY) => prevCurY + (tgY - prevCurY) / 20);
            requestAnimationFrame(move);
        };

        const handleMouseMove = (event) => {
            setTgX(event.clientX);
            setTgY(event.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);

        move(); // Start animation loop

        return () => {
            // Clean up event listener
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [tgX, tgY]);

    return (
        <div className="interactive" style={{ transform: `translate(${Math.round(curX)}px, ${Math.round(curY)}px)` }}>
            {/* Your interactive content goes here */}
        </div>
    );
};

export default InteractiveComponent;
