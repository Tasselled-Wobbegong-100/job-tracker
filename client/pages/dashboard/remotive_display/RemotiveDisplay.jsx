import React from 'react';
import JobSearchListings from './JobSearchListings.jsx';

const RemotiveDisplay = props => {
  return (
    <div className='RemotiveContainer'>
      <h3 id='browse'>Browse Postings</h3>
      <JobSearchListings getApiInfo={props.getApiInfo} jobs={props.jobs} addApplication={props.addApplication}/>
    </div>
  )
}

export default RemotiveDisplay;