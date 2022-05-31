import React from 'react';
import JobSearchListings from './JobSearchListings.jsx';

const RemotiveDisplay = props => {
  return (
    <div className='RemotiveContainer'>
      <header>
        <h2 id='browse'>Browse Postings</h2>
      </header>
      <JobSearchListings getApiInfo={props.getApiInfo} jobs={props.jobs} addApplication={props.addApplication}/>
    </div>
  )
}

export default RemotiveDisplay;