import React from 'react';
import { Link } from 'react-router-dom';
import SubjectCard1 from '../components/SubjectCard1';
import SubjectCard2 from '../components/SubjectCard2';
import SubjectCard3 from '../components/SubjectCard3';
import SubjectCard4 from '../components/SubjectCard4';
import SubjectCard5 from '../components/SubjectCard5';

function FourthSem() {

  return (
    <div className="sem">
      <div className="sem-content">
        <h3>Fourth Sem Subjects</h3>
        <div className="subject-cards">
          <Link to={`/fourthsem/18`}> <SubjectCard1 subjectName={"Principles of Management"} /> </Link>
          <Link to={`/fourthsem/19`}> <SubjectCard2 subjectName={"Probability, Statistics and Numerical Methods"} /> </Link>
          <Link to={`/fourthsem/20`}>  <SubjectCard3 subjectName={"Computer Organization & Architecture"} /> </Link>
          <Link to={`/fourthsem/21`}>  <SubjectCard4 subjectName={"Operating Systems"} /> </Link>
          <Link to={`/fourthsem/22`}> <SubjectCard5 subjectName={"Object Oriented Programming using Java"} /></Link>
        </div>
      </div>

    </div>
  );
}

export default FourthSem;
