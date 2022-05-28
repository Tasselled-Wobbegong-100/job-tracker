import React from 'react';
import RemotiveDisplay from './remotive_display/RemotiveDisplay.jsx'
import ApplicationsDisplay from './application_display/ApplicationsDisplay.jsx';

const JobDashboard = props => {

  return (
    <div className='JobDashboardContainer'>
      <header className='dashboardHeader'>
        <h1>Job Tracker</h1>
      </header>
      <div className='listingsAndAppContainer'>
        <RemotiveDisplay getApiInfo={props.getApiInfo} jobs={props.jobs} addApplication={props.addApplication}/>
        <ApplicationsDisplay/>
      </div>
    </div>
  )
}

export default JobDashboard;