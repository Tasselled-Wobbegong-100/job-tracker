import React from 'react';
import RemotiveDisplay from './remotive_display/RemotiveDisplay.jsx'
import ApplicationsDisplay from './application_display/ApplicationsDisplay.jsx';

const JobDashboard = props => {
console.log('props.applications:', props.applications)

  return (
    <div className='JobDashboardContainer'>
      <header class='LoginHeader dashboardHeader'>
        <div class='logoAndTitle'>
          <h1>Job Tassler</h1>
          <img className='logo' src='http://cdn.onlinewebfonts.com/svg/img_543505.png'></img>
        </div>
        <h3>Control the chaos of your job search.</h3>
      </header>
      <div className='listingsAndAppContainer'>
        <RemotiveDisplay getApiInfo={props.getApiInfo} jobs={props.jobs} addApplication={props.addApplication}/>
        <ApplicationsDisplay applications={props.applications} currentUser={props.currentUser} getCurrentApp={props.getCurrentApp} deleteApp={props.deleteApp}/>
      </div>
    </div>
  )
}

export default JobDashboard;