import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/signUp.jsx';
import LoginPage from './pages/login.jsx';
import ApplicationToDoList from './pages/tracker/applicationToDoList.jsx';
import JobDashboard from './pages/dashboard/JobDashboard.jsx';
import './stylesheets/styles.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      jobs: {
        jobs: ''
      },
      formChange: {
        username: '',
        password: ''
      },
      applications: ['dummy application']
    }

    //MVP
      //Create new User (for signup)
      this.createUser = this.createUser.bind(this);
      //Verify User (aka get user)
      this.verifyUser = this.verifyUser.bind(this);
      //Add new application
      this.addApplication = this.addApplication.bind(this);
      //Get application details => open application tracker route
      this.getApplication = this.getApplication.bind(this);
      //API Call
      this.getApiInfo = this.getApiInfo.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.submitLogin = this.submitLogin.bind(this);
      this.submitSignUp = this.submitSignUp.bind(this);
          
      //Nice to have
        //Update job application
        //Delete job application
  }

  componentDidMount() {
    this.getApiInfo();
  }

  handleChange (event) {
    event.preventDefault();
    const { value, id } = event.target;
    if (id === 'usernameLoginInput' || id === 'usernameSignUpInput'){
      const formChange = {...this.state.formChange};
      formChange.username = value;
      this.setState({formChange}, () => console.log(this.state.formChange.username));
    }
    if (id === 'passwordLoginInput' || id === 'passwordSignUpInput'){
      const formChange = {...this.state.formChange};
      formChange.password = value;
      this.setState({formChange}, () => console.log(this.state.formChange.password));
    }
  }

  submitLogin (event) {
    console.log('submitLogin: ', this.state.formChange.username);
  }

  submitSignUp (event) {
    console.log('submitSignUp: ', this.state.formChange.username);
  }

  createUser(){

  }

  verifyUser(){
    
  }
  
  addApplication(job) {

    // POST request to backend
    // fetch('/api',{
    //   method: 'POST',
    //   body: JSON.stringify(job),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }})
    //   .then(data => {
    // let updatedApplicationList = this.state.applications.push(data)
    //     this.setState({
    //       applications: updatedApplicationList
    //      }
    //     })
    //   )
    console.log('POST request sent')
    return;
  }

  getApplication() {

  }

  getApiInfo () {
    
    fetch('../server/dummy_api/remotive.json')
      .then(response => response.json())
      .then(data => 
        this.setState({jobs: data.jobs})
      )
  }
  
  render(){
    return (
    <div className="router">
      <Routes>
        <Route
          exact
          path="/"
          element={ <LoginPage 
            handleChange={this.handleChange}
            submitLogin={this.submitLogin}
          />}
        />
          <Route
            exact
            path="/signup"
            element={ <SignUp 
              handleChange={this.handleChange}
              submitSignUp={this.submitSignUp}
            /> }
          />
          <Route
            exact
            path="/dashboard"
            element={ <JobDashboard 
              getApiInfo={this.getApiInfo} 
              jobs={this.state.jobs}
              addApplication={this.addApplication}
              newApplication={this.state.newApplication}
              applications={this.state.applications}
            />}
          />
          <Route
            exact
            path="/tracker/:id"
            element={ <ApplicationToDoList /> }
          />
      </Routes>
    </div>
    )
   }
  }

export default App;