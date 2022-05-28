import React from 'react'
import { Link } from 'react-router-dom';

const LoginPage = props => {
  return (
    <div className='loginContainer'>
      
      <Link to='/dashboard'>Dashboard</Link>
      <br/>
      <Link to='/tracker/:id'>To Do List</Link>
      <br/>
      <Link to='/signup'>Sign Up</Link>
    </div>
  )
}

export default LoginPage;