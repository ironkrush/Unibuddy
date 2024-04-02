import React from 'react';
import SubjectCard from '../components/SubjectCard';

function EightSem() {
  const subjects = [
    {
      subjectName: 'Next Generation Networks'
    },
    {
      subjectName: 'Big Data Analytics'
    },
    {
      subjectName: 'Web Data Management (Category: Data Science)'
    },
    {
      subjectName: 'Neural Network and Deep Learning (Category: Data Science)'
    }
  ];

  return (
    <div className="eight-sem">
      <div className="sem-content">
        <h2>Eight Sem Subjects</h2>
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

export default EightSem;
