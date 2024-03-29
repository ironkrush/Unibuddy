import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../components/Heading';


function Home() {
  const sentence = "A gift from Asynchroners!!".split("");
  return (
    <>
      <div className="home">
        <div className='heading'>
        {sentence.map((letter, index) =>{
          return(
            <Heading key={index}>
              {letter === " " ? "\u00A0" : letter}
            </Heading>
          )
        })}

        </div>
        <div className="content">
          <ul>
            <li>
              <Link to="/first-year">First Year</Link>
            </li>
            <li>
              <Link to="/second-year">Second Year</Link>
            </li>
            <li>
              <Link to="/third-year">Third Year</Link>
            </li>
            <li>
              <Link to="/fourth-year">Fourth Year</Link>
            </li>
          </ul>
        </div>

      </div>
    </>
 );
}

export default Home;
