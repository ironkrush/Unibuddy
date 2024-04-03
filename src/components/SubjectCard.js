import React from 'react';

function SubjectCard({ subjectName }) {
  return (
          <div className="sub-card">
            <h3 className='sub-heading'>{subjectName}</h3>
          </div> 
  );
}

export default SubjectCard;
