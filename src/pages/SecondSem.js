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
          <Link to={`/secondsem/7`}>    <SubjectCard1 subjectName={"Engineering Mathematics II"} /></Link>
          <Link to={`/secondsem/8`}>  <SubjectCard2 subjectName={"Basic Electrical & Electronics Engineering"} /></Link>
          <Link to={`/secondsem/9`}>  <SubjectCard3 subjectName={"Fundamentals OF Mechanical Engineering"} /> </Link>
          <Link to={`/secondsem/10`}>  <SubjectCard4 subjectName={"Business Communication And Presentation Skills"} /> </Link>
          <Link to={`/secondsem/11`}>  <SubjectCard5 subjectName={"Introduction TO Information & Communication Technology"} /> </Link>
          <Link to={`/secondsem/12`}>   <SubjectCard7 subjectName={"Object Oriented Programming With 'C++'"} /> </Link>
        </div>
      </div>

    </div>
  );
}

export default SecondSem;
