import React from 'react';
import { Link } from 'react-router-dom';
import SubjectCard1 from '../components/SubjectCard1';
import SubjectCard2 from '../components/SubjectCard2';
import SubjectCard3 from '../components/SubjectCard3';
import SubjectCard4 from '../components/SubjectCard4';

function EightSem() {

  return (
    <div className="sem">
      <div className="sem-content">
        <h3>Eight Sem Subjects</h3>
        <div className="subject-cards">
          <Link to={`/eightsem/39`}><SubjectCard1 subjectName={"Next Generation Networks"} /></Link>
          <Link to={`/eightsem/40`}> <SubjectCard2 subjectName={"Big Data Analytics"} /></Link>
          <Link to={`/eightsem/41`}> <SubjectCard3 subjectName={"Web Data Management (Category: Data Science)"} /></Link>
          <Link to={`/eightsem/42`}> <SubjectCard4 subjectName={"Neural Network and Deep Learning (Category: Data Science)"} /></Link>
        </div>
      </div>

    </div>
  );
}

export default EightSem;
