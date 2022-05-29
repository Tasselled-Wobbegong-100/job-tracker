import React from 'react';

const ToDoList = props => {
  const { role_title, company, location, interview_number, application_submitter, follow_up_deadline, application_status } = props;

  return (
    <div className='ApplicationDetailsContainer'>
      <h1>
        Application Details
      </h1>
      <ul>
      <li>Role: <input>{props.role}</input></li>
      {/* <li>Role: {props.role}</li><input></input>
      <li>Company: {props.role}</li>
      <li>Location: {props.role}</li>
      <li>Interview Number: {props.role}</li>
      <li>Application Submitted: {props.role}</li>
      <li>Application: {props.role}</li> */}

      </ul>
      {/* <Link to='/tracker/:id'>To Do List</Link> */}
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

export default ToDoList;
