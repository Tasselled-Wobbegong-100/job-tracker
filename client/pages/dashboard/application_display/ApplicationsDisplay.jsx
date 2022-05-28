import React from 'react';
import { Link } from 'react-router-dom';
import MyApplicationsList from './MyApplicationsList.jsx';
import ApplicationDetails from './ApplicationDetails.jsx';


const ApplicationsDisplay = props => {
  
  console.log(props.applications);
  const applicationsToDisplay = [];
  for (let i = 0; i < props.applications.length; i++) {
    applicationsToDisplay.push(<ApplicationDetails key={`application${i}`} application={props.applications[i]}/>);
  }; 
    
  return (
    <div className='ApplicationsDisplayContainer'>
      <h1>Applications Display</h1>
      <Link to='/tracker/:id'>To Do List</Link>
    </div>
  )
}

export default ApplicationsDisplay;