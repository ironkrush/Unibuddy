import React from 'react';
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
        <SubjectCard1 subjectName={"Artificial Intelligence"} />
          <SubjectCard2 subjectName={"Python Programming"} />
          <SubjectCard3 subjectName={"Cryptography and Network Security"} />
          <SubjectCard4 subjectName={"Internet of Things (Category: Systems)"} />
          <SubjectCard5 subjectName={"Machine Learning (Category: Data Science & Machine Intelligence)"} />
        </div>
      </div>
     
    </div>
  );
}

export default SixthSem;
