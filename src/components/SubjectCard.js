import React from 'react';

function SubjectCard({ subjectName, description }) {
  return (
    <div className="subject-card">
      <h3>{subjectName}</h3>
      <p>{description}</p>
    </div>
  );
}

export default SubjectCard;
