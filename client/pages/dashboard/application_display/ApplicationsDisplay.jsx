import React from 'react';
import MyApplicationsList from './MyApplicationsList.jsx';

const ApplicationsDisplay = props => {
    
  return (
    <div className='ApplicationsDisplayContainer'>
      <h1>Your Applications</h1>
      <MyApplicationsList applications={props.applications} currentUser={props.currentUser} getCurrentApp={props.getCurrentApp} deleteApp={props.deleteApp}/>
    </div>
  )
}

export default ApplicationsDisplay;