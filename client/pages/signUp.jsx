import React from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = props => {
  
  let navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    const res = await props.submitSignUp(event);
    if (res.status === 200){
      return navigate('../dashboard', {replace: true});
    }
    return console.log(`invaid response, status ${res.status}`);
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
        <form className='loginForm'>
          <input id='usernameSignUpInput' className='inputTextForm loginPageItems' type='text' placeholder='username' onChange={props.handleChange} autoComplete='off' required/>
          <input id='passwordSignUpInput' className='inputTextForm loginPageItems' type='password' placeholder='password' onChange={props.handleChange} required/>
          <button id='loginSubmitButton' className='submitFormButton loginPageItems' onClick={submit} type="submit">Create New Account</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp;