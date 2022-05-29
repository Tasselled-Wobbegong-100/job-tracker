import React from 'react';
import JobListing from './JobListing.jsx'



const JobSearchListings = props => {

  console.log(props.jobs);
  const jobsToDisplay = [];
  for (let i = 0; i < props.jobs.length; i++) {
    jobsToDisplay.push(<JobListing key={`jobListing${i}`} job={props.jobs[i]} addApplication={props.addApplication}/>);
  }; 
  
  return (
    <div id='JobSearchListingsContainer'>
      {jobsToDisplay}
    </div>
  )
};

export default JobSearchListings;