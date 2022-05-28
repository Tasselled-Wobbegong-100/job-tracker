import React from 'react'
import { Link } from 'react-router-dom';

const LoginPage = props => {

  const test = (event) => {
    event.preventDefault();
    console.log('testing LoginPage submit function, event id: ', event.target.id);
  }

  return (
    <div className='loginContainer'>    
      <form className='loginForm'>
        <input id='usernameLoginInput' className='inputTextForm' type='text' placeholder='username'/>
        <input id='passwordLoginInput' className='inputTextForm' type='text' placeholder='password'/>
        <button id='loginSubmitButton' className='submitFormButton' onClick={test}>Submit</button>
      </form>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/tracker/:id'>To Do List</Link>
      <Link to='/signup'>Sign Up</Link>
    </div>
  )
}

export default LoginPage;