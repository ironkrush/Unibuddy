import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      <div className="home">

        <div className="content">
          <h2>Welcome to the University Website</h2>
          <p>This is the home page of our university website. You can navigate to different year pages to access previous year questions.</p>
          <p>Please select a year to continue:</p>
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
