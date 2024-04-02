import React from 'react';
import SubjectCard from '../components/SubjectCard';

function SeventhSem() {
  // Sample subject data for first year
  const subjects = [
    {
      subjectName: 'Compiler Design'
    },
    {
      subjectName: 'Cyber Security'
    },
    {
      subjectName: 'Natural Language Processing (Category: Data Science)'
    },
    {
      subjectName: 'Blockchain Technology (Category: Application)'
    }
  ];

  return (
    <div className="seventh-sem">
    
      <div className="sem-content">
        <h2>Seventh Sem Subjects</h2>
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

export default SeventhSem;
