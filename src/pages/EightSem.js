import React from 'react';
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
          <SubjectCard1 subjectName={"Next Generation Networks"} />
          <SubjectCard2 subjectName={"Big Data Analytics"} />
          <SubjectCard3 subjectName={"Web Data Management (Category: Data Science)"} />
          <SubjectCard4 subjectName={"Neural Network and Deep Learning (Category: Data Science)"} />
        </div>
      </div>
     
    </div>
  );
}

export default EightSem;
