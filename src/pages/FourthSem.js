import React from 'react';
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
        <SubjectCard1 subjectName={"Principles of Management"} />
          <SubjectCard2 subjectName={"Probability, Statistics and Numerical Methods"} />
          <SubjectCard3 subjectName={"Computer Organization & Architecture"} />
          <SubjectCard4 subjectName={"Operating Systems"} />
          <SubjectCard5 subjectName={"Object Oriented Programming using Java"} />
        </div>
      </div>
     
    </div>
  );
}

export default FourthSem;
