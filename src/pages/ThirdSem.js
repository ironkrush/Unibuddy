import React from 'react';
import SubjectCard from '../components/SubjectCard';

function ThirdSem() {

  const subjects = [
    {
      subjectName: 'Discrete Mathematics'
    },
    {
      subjectName: 'Data Structures & Algorithms'
    },
    {
      subjectName: 'Digital Electronics'
    },
    {
      subjectName: 'IT Workshop'
    },
    {
      subjectName: 'Database Management Systems'
    },
  ];

  return (
    <div className="second-year">
    
      <div className="sem-content">
        <h2>Third Sem Subjects</h2>
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

export default ThirdSem;
