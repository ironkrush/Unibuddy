import React from 'react';
import SubjectCard from '../components/SubjectCard';

function FirstSem() {
  const subjects = [
    {
      subjectName: 'ENGINEERING MATHEMATICS I'
    },
    {
      subjectName: 'FUNDAMENTAL OF PROGRAMMING'
    },
    {
      subjectName: 'ELEMENTS OF CIVIL ENGINEERING'
    },
    {
      subjectName: 'ENGINEERING GRAPHICS'
    },
    {
      subjectName: 'FUNDAMENTAL OF PROGRAMMING'
    },

  ];

  return (
    <div className="first-sem">
    
      <div className="sem-content">
        <h2>First Sem Subjects</h2>
        <div className="subject-cards">
          {subjects.map((subject, index) => (
            <SubjectCard
              key={index}
              subjectName={subject.subjectName}
            />
          ))}
        </div>
      </div>
     
    </div>
  );
}

export default FirstSem;
