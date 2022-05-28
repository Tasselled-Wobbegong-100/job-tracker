import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/signUp.jsx';
import LoginPage from './pages/login.jsx';
import ApplicationToDoList from './pages/tracker/applicationToDoList.jsx';
import JobDashboard from './pages/home/jobDashboard.jsx';
import './stylesheets/styles.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }

    //MVP
      //Create new User (for signup)
      this.createUser = this.createUser.bind(this)
      //Verify User (aka get user)
      this.verifyUser = this.verifyUser.bind(this)
      //Add new application
      this.addApplication = this.addApplication.bind(this)
      //Get application details => open application tracker route
      this.getApplication = this.getApplication.bind(this)
          
      //Nice to have
        //Update job application
        //Delete job application
  }

  componentDidMount() {
    
  }

  createUser(){

  }

  verifyUser(){
    
  }
  
  addApplication() {
    
  }

  getApplication() {

  }
  
  render(){
    return (
    <div className="router">
      <Routes>
        <Route
          exact
          path="/"
          element={ <LoginPage />}
        />
          <Route
            exact
            path="/signup"
            element={ <SignUp /> }
          />
          <Route
            exact
            path="/dashboard"
            element={ <JobDashboard />}
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