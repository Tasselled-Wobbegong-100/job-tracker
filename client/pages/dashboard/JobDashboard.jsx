import React from 'react';
import RemotiveDisplay from './remotive_display/RemotiveDisplay.jsx'
import ApplicationsDisplay from './application_display/ApplicationsDisplay.jsx';

const JobDashboard = props => {
console.log('props.applications:', props.applications)

  return (
    <div className='JobDashboardContainer'>
      <header className='dashboardHeader'>
        <h1>Job Tracker</h1>
      </header>
      <div className='listingsAndAppContainer'>
        <RemotiveDisplay getApiInfo={props.getApiInfo} jobs={props.jobs} addApplication={props.addApplication}/>
        <ApplicationsDisplay applications={props.applications} getCurrentApp={props.getCurrentApp}/>
      </div>
    </div>
  )
}

export default JobDashboard;