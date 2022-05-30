import React from 'react';

const ApplicationDetails = props => {
  const { id, role_title, company, application_status } = props.application;
  const trackerPath = `/tracker/${id}`;

  return (
    <div className='ApplicationDetailsContainer'>
      <h4 id='appDetailHead'>
        {role_title} @ {company}
      </h4>
      <p id='appDetailStatus'>
        Application Status: {application_status}
      </p>
      {/* <Link to={trackerPath}>To Do List</Link> */}
    </div>
  )
}

//{id: 26,
        // role_title: "Senior Everything Engineer",
        // company: "Toys R US",
        // location: "Antarctica",
        // interview_number: "500",
        // application_submitted: "3000 BC (Before Codesmith)",
        // follow_up_deadline: "May 67th, 2088",
        // job_type: "Cleaning",
        // salary: "1 trillion / year",
        // application_status: "Rejected",
 //     }

export default ApplicationDetails;
