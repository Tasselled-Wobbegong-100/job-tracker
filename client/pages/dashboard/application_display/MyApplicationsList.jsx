import React from 'react';
import ApplicationDetails from './ApplicationDetails.jsx';


const MyApplicationsList = props => {
  
  const applicationsToDisplay = [];
  for (let i = 0; i < props.applications.length; i++) {
    applicationsToDisplay.push(<ApplicationDetails  
      key={`application${i}`}
      application={props.applications[i]}
      getCurrentApp={props.getCurrentApp}
      submitAppDetail={props.submitAppDetail}
    />);
  }; 
  
  return (
    <div className='MyApplicationsListContainer'>
      {applicationsToDisplay}
    </div>
  )
}

export default MyApplicationsList;