import React from 'react';
import ApplicationDetails from './ApplicationDetails.jsx';


const MyApplicationsList = props => {

  const { id } = props.currentUser;
  
  const applicationsToDisplay = [];
  for (let i = 0; i < props.applications.length; i++) {
    applicationsToDisplay.push(<ApplicationDetails  
      key={`application${i}`}
      application={props.applications[i]} 
      currentUserId={id} 
      getCurrentApp={props.getCurrentApp} 
      deleteApp={props.deleteApp}
    />);
  }; 
  
  return (
    <div className='MyApplicationsListContainer'>
      {applicationsToDisplay}
    </div>
  )
}

export default MyApplicationsList;