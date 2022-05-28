import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = props => {

  let navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    props.submitLogin(event);
    navigate('./dashboard', {replace: true});
  }

  return (
    <div className='loginContainer'>    
      <form className='loginForm'>
        <input id='usernameLoginInput' className='inputTextForm' type='text' placeholder='username' onChange={props.handleChange}/>
        <input id='passwordLoginInput' className='inputTextForm' type='text' placeholder='password' onChange={props.handleChange}/>
        <button id='loginSubmitButton' className='submitFormButton' onClick={submit}>Submit</button>
      </form>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/tracker/:id'>To Do List</Link>
      <Link to='/signup'>Sign Up</Link>
    </div>
  )
}

export default LoginPage;