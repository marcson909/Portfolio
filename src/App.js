import React, {useState, useEffect} from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ResumeData from './Components/Resume/ResumeData';
import Header from './Components/Header/Header';

//import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

/*
 <About resumeData={ResumeData}/>
  <Resume resumeData={ResumeData}/>
  <Portfolio resumeData={ResumeData}/>
*/

function App() {

  return (
    <div className="App">
      <Header resumeData={ResumeData}/>
     
     
    </div>
  );
}

export default App;
