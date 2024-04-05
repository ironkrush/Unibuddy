import React from 'react';
import SubjectCard1 from '../components/SubjectCard1';
import SubjectCard2 from '../components/SubjectCard2';
import SubjectCard3 from '../components/SubjectCard3';
import SubjectCard4 from '../components/SubjectCard4';
import SubjectCard5 from '../components/SubjectCard5';

function ThirdSem() {

  return (
    <div className="sem">
      <div className="sem-content">
        <h3>Third Sem Subjects</h3>
        <div className="subject-cards">
        <SubjectCard1 subjectName={"Discrete Mathematics"} />
          <SubjectCard2 subjectName={"Data Structures & Algorithms"} />
          <SubjectCard3 subjectName={"Digital Electronics"} />
          <SubjectCard4 subjectName={"IT Workshop"} />
          <SubjectCard5 subjectName={"Database Management Systems"} />
        </div>
      </div>
     
    </div>
  );
}

export default ThirdSem;
