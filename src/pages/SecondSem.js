import React from 'react';
import SubjectCard from '../components/SubjectCard';

function SecondSem() {

  const subjects = [
    {
      subjectName: 'ENGINEERING MATHEMATICS II'
    },
    {
      subjectName: 'BASIC ELECTRICAL & ELECTRONICS ENGINEERING'
    },
    {
      subjectName: 'FUNDAMENTAL OF MECHANICAL ENGINEERING'
    },
    {
      subjectName: 'BUSINESS COMMUNICATION AND PRESENTATION SKILLS'
    },
    {
      subjectName: 'INTRODUCTION TO INFORMATION & COMMUNICATION TECHNOLOGY'
    },
    {
      subjectName: 'OBJECT ORIENTED PROGRAMMING WITH "C++"' 
    }
  ];

  return (
    <div className="second-sem">
    
      <div className="sem-content">
        <h2>Second Sem Subjects</h2>
        <div className="subject-cards">
          {subjects.map((subject, index) => (
            <SubjectCard
              key={index}
              subjectName={subject.subjectName}
              description={subject.description}
            />
          ))}
        </div>
      </div>
     
    </div>
  );
}

export default SecondSem;
