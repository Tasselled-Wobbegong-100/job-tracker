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
    <div class='loginPage'>
      <header class='LoginHeader'>
        <div class='logoAndTitle'>
        <h1>Job Tassler</h1>
        <img className='logo' src='http://cdn.onlinewebfonts.com/svg/img_543505.png'></img>
        </div>
        <h3>Control the chaos of your job search.</h3>
      </header>
      <div className='loginContainer'>
        <div className='invaidEntry'>{props.isUser}</div>
        <form className='loginForm'>
          <input id='usernameLoginInput' className='inputTextForm loginPageItems' type='text' placeholder='username' onChange={props.handleChange} autoComplete='off'/>
          <input id='passwordLoginInput' className='inputTextForm loginPageItems' type='password' placeholder='password' onChange={props.handleChange}/>
          <button id='loginSubmitButton' className='submitFormButton loginPageItems' onClick={submit}>Login</button>
        </form>
        <div className='dontHaveAccountText'>
          <Link to='/signup'>Don't have an account?</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;