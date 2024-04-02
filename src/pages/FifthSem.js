import React from 'react';
import SubjectCard from '../components/SubjectCard';

function FifthSem() {
  // Sample subject data for first year
  const subjects = [
    {
      subjectName: 'Software Engineering'
    },
    {
      subjectName: 'Microprocessor  Architecture and Programming'
    },
    {
      subjectName: 'Theory of Computation'
    },
    {
      subjectName: 'Design & Analysis of Algorithms'
    },
    {
      subjectName: 'Computer Networks'
    },
    {
      subjectName: 'Advanced Java Programming (Category: Application)'
    },
    {
      subjectName: 'Dot Net Technology (Category: Application)'
    }
  ];

  return (
    <div className="fifth-sem">
    
      <div className="sem-content">
        <h2>Fifth Sem Subjects</h2>
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

export default FifthSem;
