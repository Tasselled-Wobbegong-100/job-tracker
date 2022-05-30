import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = props => {

  let navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    const res = await props.submitLogin(event);
    if (res.status === 200){
      return navigate('../dashboard', {replace: true});
    }
  }

  return (
    <div className='loginContainer'>
      <div className='invaidEntry'>{props.isUser}</div>
      <form className='loginForm'>
        <input id='usernameLoginInput' className='inputTextForm' type='text' placeholder='username' onChange={props.handleChange}/>
        <input id='passwordLoginInput' className='inputTextForm' type='password' placeholder='password' onChange={props.handleChange}/>
        <button id='loginSubmitButton' className='submitFormButton' onClick={submit}>Login</button>
      </form>
      <Link to='/signup'>Don't have an account?</Link>
    </div>
  )
}

export default LoginPage;