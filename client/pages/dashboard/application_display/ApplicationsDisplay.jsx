import React from 'react';
import { Link } from 'react-router-dom';
import MyApplicationsList from './MyApplicationsList.jsx';
import ApplicationDetails from './ApplicationDetails.jsx';


const ApplicationsDisplay = props => {
  
  console.log(props.applications);
    
  return (
    <div className='ApplicationsDisplayContainer'>
      <h1>Your Applications</h1>
      <MyApplicationsList applications={props.applications}/>
    </div>
  )
}

export default ApplicationsDisplay;