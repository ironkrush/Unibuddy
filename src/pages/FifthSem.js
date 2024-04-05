import React from 'react';
import SubjectCard1 from '../components/SubjectCard1';
import SubjectCard2 from '../components/SubjectCard2';
import SubjectCard3 from '../components/SubjectCard3';
import SubjectCard4 from '../components/SubjectCard4';
import SubjectCard5 from '../components/SubjectCard5';
import SubjectCard6 from '../components/SubjectCard6';
import SubjectCard7 from '../components/SubjectCard7';


function FifthSem() {

  return (
    <div className="sem">
    
      <div className="sem-content">
        <h3>Fifth Sem Subjects</h3>
        <div className="subject-cards">
        <SubjectCard1 subjectName={"Software Engineering"} />
          <SubjectCard2 subjectName={"Theory of Computation"} />
          <SubjectCard3 subjectName={"Design & Analysis of Algorithms"} />
          <SubjectCard4 subjectName={"Computer Networks"} />
          <SubjectCard5 subjectName={"Advanced Java Programming (Category: Application)"} />
          <SubjectCard6 subjectName={"Dot Net Technology (Category: Application)"} />
          <SubjectCard7 subjectName={"Microprocessor  Architecture and Programming"} />
        </div>
      </div>
     
    </div>
  );
}

export default FifthSem;
