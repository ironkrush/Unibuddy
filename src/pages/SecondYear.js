import React from 'react';
import SubjectCard from '../components/SubjectCard';

function SecondYear() {
  // Sample subject data for first year
  const subjects = [
    {
      subjectName: 'Mathematics',
      instructor: 'Prof. Smith',
      description: 'Introduction to calculus and algebra.'
    },
    {
      subjectName: 'Physics',
      instructor: 'Dr. Johnson',
      description: 'Fundamental principles of mechanics and thermodynamics.'
    },
    // Add more subjects as needed
  ];

  return (
    <div className="second-year">
    
      <div className="content">
        <h2>Second Year Subjects</h2>
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

export default SecondYear;
