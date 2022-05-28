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
    job.salary = 'It\s a surprise!'
  }
  let newStr = "";
  //HTML parser function fail
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
      <h1 id='ListingHeader'><span><img className='CompanyLogo' src={job.company_logo_url}></img></span>{job.company_name}</h1>
      <ul>
        <li>Job Title: {job.title}</li>

        <li>Salary: {job.salary}</li>

        <li>Location: {job.candidate_required_location}</li>

        <li>Relevant Tags: {job.tags.join(", ")}</li>

      <br></br>
        <button style={{backgroundColor: 'yellow'}} onClick={() => props.addApplication(props.job)}>
          Ready to apply for this job?
        </button>

      </ul>
    </div>
  )
}

export default JobListing;