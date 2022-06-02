import React from 'react'
import { Link } from 'react-router-dom';

const ApplicationToDoList = props => {

      const { role_title , company, location, interview_number, application_submitted, follow_up_deadline, application_status, user_account_id, _id} = props.currentApp;


      const submitDetails = async (event) => {
        event.preventDefault();
        props.submitAppDetail(event);
      }

  return (
    <div className='trackerPageContainer'>
      <div className='ToDoListContainer'>
        <h1 id='detailsheader'>
          Application Details
        </h1>
        <div className='DetailsContainer'>
          <ul>
            <li>Role: <span className='jobSubject'>{role_title}</span></li>
            <li>Company: <span className='jobSubject'>{company}</span></li>
            <li>Application Status: {application_status}<br></br>
              <form id='StatusForm'>
                <label><input className='detailsInput' type='text' id='UpdateStatus' placeholder='Update Status...' onChange={props.handleChange} autoComplete='off'/></label>
                {/* <input className='ToDoListSubmitButton' type="submit" value="Submit" onClick={submitDetails}/> */}
                <button id="toDoListSubmitButton" onClick={submitDetails}>Submit</button>
              </form></li>
            <li>Location: <span className='jobSubject'>{location}</span></li>
            <li>Interview Number: {interview_number}<br></br>
              <form id='InterviewNumForm'>
                <label><input className='detailsInput' type='text' id='InterviewNum' placeholder='Update Interview #...' onChange={props.handleChange} autoComplete='off'/></label>
                {/* <input className='ToDoListSubmitButton' type="submit" value="Submit" onClick={submitDetails}/> */}
                <button id="toDoListSubmitButton" onClick={submitDetails}>Submit</button>
              </form></li>
            <li>Follow-up: {follow_up_deadline}<br></br>
              <form id='FollowUpForm'>
                <label><input className='detailsInput' type='text' id='FollowUp' placeholder='Next Follow-up...' onChange={props.handleChange} autoComplete='off'/></label>
                {/* <input className='ToDoListSubmitButton' type="submit" value="Submit" onClick={submitDetails}/> */}
                <button id="toDoListSubmitButton" onClick={submitDetails}>Submit</button>
              </form></li>
            <li>Application Submitted: {application_submitted}<br></br>
              <form id='AppSubmitForm'>
                <label><input className='detailsInput' type='text' id='AppSubmitted' placeholder='Update Submitted Status...' onChange={props.handleChange} autoComplete='off'/></label>
                {/* <input className='ToDoListSubmitButton' type="submit" value="Submit" onClick={submitDetails}/> */}
                <button id="toDoListSubmitButton" onClick={submitDetails}>Submit</button>
              </form></li>
          </ul>
        </div>
      </div>
      <Link to='/dashboard'>Return to dashboard</Link>
    </div>
  );
};

export default ApplicationToDoList;