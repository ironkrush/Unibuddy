import React from 'react';
import { Link } from 'react-router-dom';
import SubjectCard1 from '../components/SubjectCard1';
import SubjectCard2 from '../components/SubjectCard2';
import SubjectCard3 from '../components/SubjectCard3';
import SubjectCard4 from '../components/SubjectCard4';
import SubjectCard5 from '../components/SubjectCard5';
import SubjectCard6 from '../components/SubjectCard6';
import SubjectCard7 from '../components/SubjectCard7';


function FifthSem() {

  return (
    <div className="sem">

      <div className="sem-content">
        <h3>Fifth Sem Subjects</h3>
        <div className="subject-cards">
          <Link to={`/fifthsem/23`}> <SubjectCard1 subjectName={"Software Engineering"} /></Link>
          <Link to={`/fifthsem/24`}>  <SubjectCard2 subjectName={"Theory of Computation"} /></Link>
          <Link to={`/fifthsem/25`}>  <SubjectCard3 subjectName={"Design & Analysis of Algorithms"} /></Link>
          <Link to={`/fifthsem/26`}> <SubjectCard4 subjectName={"Computer Networks"} /></Link>
          <Link to={`/fifthsem/27`}> <SubjectCard5 subjectName={"Advanced Java Programming (Category: Application)"} /></Link>
          <Link to={`/fifthsem/28`}>  <SubjectCard6 subjectName={"Dot Net Technology (Category: Application)"} /></Link>
          <Link to={`/fifthsem/29`}>  <SubjectCard7 subjectName={"Microprocessor  Architecture and Programming"} /></Link>
        </div>
      </div>

    </div>
  );
}

export default FifthSem;
