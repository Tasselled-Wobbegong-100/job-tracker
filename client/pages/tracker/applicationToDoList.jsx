import React from 'react'

const ApplicationToDoList = props => {

      const { role_title , company, location, interview_number, application_submitted, follow_up_deadline, application_status, user_account_id} = props.currentApp;


      const submitDetails = async (event) => {
        event.preventDefault();
        props.submitAppDetail(event);
      }

  return (
    <div className='ToDoListContainer'>
      <h1 id='detailsheader'>
        Application Details
      </h1>
      <div className='DetailsContainer'>
        <ul>
          <li>Role: {props.role_title}</li>
          <li>Company: {props.company}</li>
          <li>Application Status: {props.application_status}<br></br>
            <form id='StatusForm'>
              <label><input className='detailsInput' type='text' id='UpdateStatus' placeholder='Update Status...' /></label>
              <input className='ToDoListSubmitButton' type="submit" value="Submit" onClick={submitDetails}/>
            </form></li>
          <li>Location: {props.location}</li>
          <li>Interview Number: {props.interview_number}<br></br>
            <form id='InterviewNumForm'>
              <label><input className='detailsInput' type='text' id='InterviewNum' placeholder='Update Interview #...' /></label>
              <input className='ToDoListSubmitButton' type="submit" value="Submit" onClick={submitDetails}/>
            </form></li>
          <li>Follow-up: {props.follow_up_deadline}<br></br>
            <form id='FollowUpForm'>
              <label><input className='detailsInput' type='text' id='FollowUp' placeholder='Next Follow-up...' /></label>
              <input className='ToDoListSubmitButton' type="submit" value="Submit" onClick={submitDetails}/>
            </form></li>
          <li>Application Submitted: {props.application_submitted}<br></br>
            <form id='AppSubmitForm'>
              <label><input className='detailsInput' type='text' id='AppSubmitted' placeholder='Update Submitted Status...' /></label>
              <input className='ToDoListSubmitButton' type="submit" value="Submit" onClick={submitDetails}/>
            </form></li>
        </ul>
      </div>
    </div>
  );
};

export default ApplicationToDoList;