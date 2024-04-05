import React from 'react';
import SubjectCard1 from '../components/SubjectCard1';
import SubjectCard2 from '../components/SubjectCard2';
import SubjectCard3 from '../components/SubjectCard3';
import SubjectCard4 from '../components/SubjectCard4';
import SubjectCard5 from '../components/SubjectCard5';
import SubjectCard7 from '../components/SubjectCard7';

function SecondSem() {
  return (
    <div className="sem">
    
      <div className="sem-content">
        <h3>Second Sem Subjects</h3>
        <div className="subject-cards">
        <SubjectCard1 subjectName={"ENGINEERING MATHEMATICS II"} />
          <SubjectCard2 subjectName={"BASIC ELECTRICAL & ELECTRONICS ENGINEERING"} />
          <SubjectCard3 subjectName={"FUNDAMENTAL OF MECHANICAL ENGINEERING"} />
          <SubjectCard4 subjectName={"BUSINESS COMMUNICATION AND PRESENTATION SKILLS"} />
          <SubjectCard5 subjectName={"INTRODUCTION TO INFORMATION & COMMUNICATION TECHNOLOGY"} />
          <SubjectCard7 subjectName={"OBJECT ORIENTED PROGRAMMING WITH 'C++'"} />
        </div>
      </div>
     
    </div>
  );
}

export default SecondSem;
