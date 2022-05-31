import React from 'react';
var DOMParser = require('dom-parser');



const JobListing = props => {
  const { job } = props;
  // const description = job.description;

  // let parser = new DOMParser();
  // let htmlDoc = parser.parseHTML(description, 'text/html');
  // console.log(htmlDoc)
  // let myvar = htmlDoc.rawHTML;
  // https://stackoverflow.com/questions/10585029/parse-an-html-string-with-js

  if(!job.salary){
    job.salary = 'It\'s a surprise!'
  }

  //HTML parser function fail
  // let newStr = "";
  // for(let i = 0; i < job.description.length; i++){
  //   let char = job.description[i];
  //   if(char === '<'){
  //     i++;
  //     while(char != '>'){
  //       i++;
  //     }
  //   }

  

  return (
    <div className='JobListingContainer'>
      <header id='ListingHeader'>
        <img className='CompanyLogo' src={job.company_logo_url}></img>
        <h1>{job.company_name}</h1>
      </header>
      <ul>
        <li>Job Title: {job.title}</li>

        <li>💰 {job.salary} 💰</li>

        <li>📍 {job.candidate_required_location}</li>

        <li>Relevant Tags: {job.tags.join(", ")}</li>
      </ul>

      <br></br>
        <button className='readyToApplyButton' onClick={() => props.addApplication(props.job)}>
          Ready to apply for this job?
        </button>

    </div>
  )
}

export default JobListing;