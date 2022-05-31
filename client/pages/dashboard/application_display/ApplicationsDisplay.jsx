import React from 'react';
import MyApplicationsList from './MyApplicationsList.jsx';

const ApplicationsDisplay = props => {
    
  return (
    <div className='ApplicationsDisplayContainer'>
      <h1>Your Applications</h1>
      <MyApplicationsList applications={props.applications} getCurrentApp={props.getCurrentApp}/>
    </div>
  )
}

export default ApplicationsDisplay;