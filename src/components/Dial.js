import React from 'react'
import { Link } from 'react-router-dom';

function Dial() {
    return (
        <>
            <div id="main">
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
                </div>
            </div>
        </>
    )
}

export default Dial