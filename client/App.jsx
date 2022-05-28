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
      loginChange: {
        username: '',
        password: ''
      },
      signUpChange: {
        username: '',
        password: ''
      },
      applications: {
          applicationList: []
      }
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
    if (id === 'usernameLoginInput'){
      const loginChange = {...this.state.loginChange};
      loginChange.username = value;
      this.setState({loginChange}, () => console.log(this.state.loginChange.username));
    }
    if (id === 'passwordLoginInput'){
      const loginChange = {...this.state.loginChange};
      loginChange.password = value;
      this.setState({loginChange}, () => console.log(this.state.loginChange.password));
    }
  }

  submitLogin (event) {
    console.log(this.state.loginChange.username);
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
    //   .then(data => 
    //     this.setState({
    //       newApplication: data
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
            element={ <SignUp /> }
          />
          <Route
            exact
            path="/dashboard"
            element={ <JobDashboard 
              getApiInfo={this.getApiInfo} 
              jobs={this.state.jobs}
              addApplication={this.addApplication}
              newApplication={this.state.newApplication}
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