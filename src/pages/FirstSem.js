import React from 'react';
import { Link } from 'react-router-dom';
import SubjectCard1 from '../components/SubjectCard1';
import SubjectCard2 from '../components/SubjectCard2';
import SubjectCard3 from '../components/SubjectCard3';
import SubjectCard4 from '../components/SubjectCard4';
import SubjectCard5 from '../components/SubjectCard5';
import SubjectCard6 from '../components/SubjectCard6';

function FirstSem() {
  return (
    <div className="sem">   
      <div className="sem-content">
        <h3>First Sem Subjects</h3>
        <div className="subject-cards">
      <Link to={`/firstsem/1`} > <SubjectCard1 subjectName={"Engineering Mathematics - I"} /></Link>
      <Link to={`/firstsem/2`} >   <SubjectCard2 subjectName={"Fundamentals OF Programming"} /></Link> 
      <Link to={`/firstsem/3`} >    <SubjectCard3 subjectName={"Elements OF Civil Engineering"} /></Link> 
      <Link to={`/firstsem/4`} >   <SubjectCard4 subjectName={"Engineering Graphics"} /></Link> 
      <Link to={`/firstsem/5`} >    <SubjectCard5 subjectName={"Engineering Physics"} /></Link> 
      <Link to={`/firstsem/6`} >    <SubjectCard6 subjectName={"Enviromental Science"} /></Link> 
        </div>
      </div>     
    </div>
  );
}

export default FirstSem;
