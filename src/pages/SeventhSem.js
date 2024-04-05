import React from 'react';
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
        <SubjectCard1 subjectName={"Compiler Design"} />
          <SubjectCard2 subjectName={"Cyber Security"} />
          <SubjectCard3 subjectName={"Natural Language Processing (Category: Data Science)"} />
          <SubjectCard4 subjectName={"Blockchain Technology (Category: Application)"} />
        </div>
      </div>
     
    </div>
  );
}

export default SeventhSem;
