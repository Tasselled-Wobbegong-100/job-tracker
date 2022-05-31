import React from 'react';
import { Link } from 'react-router-dom';
import ApplicationDetails from './ApplicationDetails.jsx';


const MyApplicationsList = props => {


  console.log(props.applications)
  const applicationsToDisplay = [];
  for (let i = 0; i < props.applications.length; i++) {
    applicationsToDisplay.push(<ApplicationDetails key={`application${i}`} application={props.applications[i]} />);
  }; 
  
    
  return (
    <div className='MyApplicationsListContainer'>
      {applicationsToDisplay}
    </div>
  )
}

export default MyApplicationsList;