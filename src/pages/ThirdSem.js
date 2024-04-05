import React from 'react';
import { Link } from 'react-router-dom';
import SubjectCard1 from '../components/SubjectCard1';
import SubjectCard2 from '../components/SubjectCard2';
import SubjectCard3 from '../components/SubjectCard3';
import SubjectCard4 from '../components/SubjectCard4';
import SubjectCard5 from '../components/SubjectCard5';

function ThirdSem() {

  return (
    <div className="sem">
      <div className="sem-content">
        <h3>Third Sem Subjects</h3>
        <div className="subject-cards">
        <Link to={`/thirdsem/13`}>  <SubjectCard1 subjectName={"Discrete Mathematics"} /> </Link>
        <Link to={`/thirdsem/14`}>  <SubjectCard2 subjectName={"Data Structures & Algorithms"} /> </Link>
        <Link to={`/thirdsem/15`}>   <SubjectCard3 subjectName={"Digital Electronics"} /> </Link>
        <Link to={`/thirdsem/16`}>  <SubjectCard4 subjectName={"IT Workshop"} /> </Link>
        <Link to={`/thirdsem/17`}>  <SubjectCard5 subjectName={"Database Management Systems"} /> </Link>
        </div>
      </div>
     
    </div>
  );
}

export default ThirdSem;
