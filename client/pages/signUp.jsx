import React from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = props => {
  let navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    const res = await props.submitSignUp(event);
    if (res.status === 200){
      console.log('valid response')
      props.setCurrentUser();
      return navigate('../dashboard', {replace: true});
    }
    return console.log(`invaid response, status ${res.status}`);
  }

  return (
    <div className='loginContainer'>    
      <form className='loginForm'>
        <input id='usernameSignUpInput' className='inputTextForm' type='text' placeholder='username' onChange={props.handleChange}/>
        <input id='passwordSignUpInput' className='inputTextForm' type='signup' placeholder='password' onChange={props.handleChange}/>
        <button id='loginSubmitButton' className='submitFormButton' onClick={submit}>Create New Account</button>
      </form>
    </div>
  )
}

export default SignUp;