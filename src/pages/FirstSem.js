import React from 'react';
import SubjectCard1 from '../components/SubjectCard1';
import SubjectCard2 from '../components/SubjectCard2';
import SubjectCard3 from '../components/SubjectCard3';
import SubjectCard4 from '../components/SubjectCard4';
import SubjectCard5 from '../components/SubjectCard5';

function FirstSem() {

  return (
    <div className="sem">   
      <div className="sem-content">
        <h3>First Sem Subjects</h3>
        <div className="subject-cards">
        <SubjectCard1 subjectName={"ENGINEERING MATHEMATICS - I"} />
          <SubjectCard2 subjectName={"FUNDAMENTAL OF PROGRAMMING"} />
          <SubjectCard3 subjectName={"ELEMENTS OF CIVIL ENGINEERING"} />
          <SubjectCard4 subjectName={"ENGINEERING GRAPHICS"} />
          <SubjectCard5 subjectName={"FUNDAMENTAL OF PROGRAMMING"} />
        </div>
      </div>     
    </div>
  );
}

export default FirstSem;
