import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ApplicationDetails = props => {

  let navigate = useNavigate();

  const { _id, role_title, company, application_status } = props.application;
  const trackerPath = `/tracker/${_id.toString()}`;

  return (
    <div className='ApplicationDetailsContainer'>
      <h4 id='appDetailHead'>
        {role_title} @ {company}
      </h4>
      <p id='appDetailStatus'>
        Application Status: {application_status}
      </p>
      <Link to={trackerPath} id={_id}
      onClick={async (event) => {
          await props.getCurrentApp(event);
          return navigate(`../${trackerPath}`, {replace: true});
        }
      }>Edit</Link>
    </div>
  )
}

export default ApplicationDetails;
