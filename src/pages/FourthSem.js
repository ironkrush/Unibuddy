import React from 'react';
import SubjectCard from '../components/SubjectCard';

function FourthSem() {
    
  const subjects = [
    {
      subjectName: 'Principles of Management'
    },
    {
      subjectName: 'Probability, Statistics and Numerical Methods'
    },
    {
      subjectName: 'Computer Organization & Architecture'
    },
    {
      subjectName: 'Operating Systems'
    },
    {
      subjectName: 'Object Oriented Programming using Java'
    },
  ];

  return (
    <div className="fourth-sem">
    
      <div className="sem-content">
        <h2>Fourth Sem Subjects</h2>
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

export default FourthSem;
