import React from 'react';
import { Link } from 'react-router-dom';
import SubjectCard1 from '../components/SubjectCard1';
import SubjectCard2 from '../components/SubjectCard2';
import SubjectCard3 from '../components/SubjectCard3';
import SubjectCard4 from '../components/SubjectCard4';
import SubjectCard5 from '../components/SubjectCard5';
import SubjectCard7 from '../components/SubjectCard7';

function SecondSem() {
  return (
    <div className="sem">

      <div className="sem-content">
        <h3>Second Sem Subjects</h3>
        <div className="subject-cards">
          <Link to={`/secondsem/7`}>    <SubjectCard1 subjectName={"ENGINEERING MATHEMATICS II"} /></Link>
          <Link to={`/secondsem/8`}>  <SubjectCard2 subjectName={"BASIC ELECTRICAL & ELECTRONICS ENGINEERING"} /></Link>
          <Link to={`/secondsem/9`}>  <SubjectCard3 subjectName={"FUNDAMENTAL OF MECHANICAL ENGINEERING"} /> </Link>
          <Link to={`/secondsem/10`}>  <SubjectCard4 subjectName={"BUSINESS COMMUNICATION AND PRESENTATION SKILLS"} /> </Link>
          <Link to={`/secondsem/11`}>  <SubjectCard5 subjectName={"INTRODUCTION TO INFORMATION & COMMUNICATION TECHNOLOGY"} /> </Link>
          <Link to={`/secondsem/12`}>   <SubjectCard7 subjectName={"OBJECT ORIENTED PROGRAMMING WITH 'C++'"} /> </Link>
        </div>
      </div>

    </div>
  );
}

export default SecondSem;
