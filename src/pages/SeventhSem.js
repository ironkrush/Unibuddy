import React from 'react';
import { Link } from 'react-router-dom';
import SubjectCard1 from '../components/SubjectCard1';
import SubjectCard2 from '../components/SubjectCard2';
import SubjectCard3 from '../components/SubjectCard3';
import SubjectCard4 from '../components/SubjectCard4';

function SeventhSem() {
  return (
    <div className="sem">

      <div className="sem-content">
        <h3>Seventh Sem Subjects</h3>
        <div className="subject-cards">
          <Link to={`/seventhsem/35`}><SubjectCard1 subjectName={"Compiler Design"} /></Link>
          <Link to={`/seventhsem/36`}> <SubjectCard2 subjectName={"Cyber Security"} /></Link>
          <Link to={`/seventhsem/37`}>  <SubjectCard3 subjectName={"Natural Language Processing (Category: Data Science)"} /></Link>
          <Link to={`/seventhsem/38`}> <SubjectCard4 subjectName={"Blockchain Technology (Category: Application)"} /></Link>
        </div>
      </div>

    </div>
  );
}

export default SeventhSem;
