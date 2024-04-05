import React from 'react';
import { Link } from 'react-router-dom';
import SubjectCard1 from '../components/SubjectCard1';
import SubjectCard2 from '../components/SubjectCard2';
import SubjectCard3 from '../components/SubjectCard3';
import SubjectCard4 from '../components/SubjectCard4';
import SubjectCard5 from '../components/SubjectCard5';

function SixthSem() {

  return (
    <div className="sem">
      <div className="sem-content">
        <h3>Sixth Sem Subjects</h3>
        <div className="subject-cards">
          <Link to={`/sixthsem/30`}>  <SubjectCard1 subjectName={"Artificial Intelligence"} /></Link>
          <Link to={`/sixthsem/31`}> <SubjectCard2 subjectName={"Python Programming"} /></Link>
          <Link to={`/sixthsem/32`}> <SubjectCard3 subjectName={"Cryptography and Network Security"} /></Link>
          <Link to={`/sixthsem/33`}> <SubjectCard4 subjectName={"Internet of Things (Category: Systems)"} /></Link>
          <Link to={`/sixthsem/34`}> <SubjectCard5 subjectName={"Machine Learning (Category: Data Science & Machine Intelligence)"} /></Link>
        </div>
      </div>

    </div>
  );
}

export default SixthSem;
