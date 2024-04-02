import React from 'react';
import SubjectCard from '../components/SubjectCard';

function SixthSem() {
  // Sample subject data for first year
  const subjects = [
    {
      subjectName: 'Artificial Intelligence'
    },
    {
      subjectName: 'Python Programming'
    },
    {
      subjectName: 'Cryptography and Network Security'
    },
    {
      subjectName: 'Internet of Things (Category: Systems)'
    },
    {
      subjectName: 'Machine Learning (Category: Data Science & Machine Intelligence)'
    },
  ];

  return (
    <div className="sixth-sem">
    
      <div className="sem-content">
        <h2>Sixth Sem Subjects</h2>
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

export default SixthSem;
