import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import enhanceText from '../components/Enhance';

function Home() {
  useEffect(() => {
    enhanceText("channel-link");
  }, []);

  return (
    <>
      <div className="home">
        <div id="text">
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
              Asynchroners
            </p>
          </div>
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
