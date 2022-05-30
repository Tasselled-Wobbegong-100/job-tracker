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
        password: '',
        isUser: ''
      },
      applications: [
        {id: 26,
        role_title: "Senior Everything Engineer",
        company: "Toys R US",
        location: "Antarctica",
        interview_number: "500",
        application_submitted: "3000 BC (Before Codesmith)",
        follow_up_deadline: "May 67th, 2088",
        job_type: "Cleaning",
        salary: "1 trillion / year",
        application_status: "Rejected"
      }],
      currentUser: {
        username: '',
        id: ''
      },
      currentApp: {},
    }

    //MVP
      //Add new application
      this.addApplication = this.addApplication.bind(this);
      //Get application details => open application tracker route
      this.getApplication = this.getApps.bind(this);
      //API Call
      this.getApiInfo = this.getApiInfo.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.submitLogin = this.submitLogin.bind(this);
      this.submitSignUp = this.submitSignUp.bind(this);
      this.setCurrentUser = this.setCurrentUser.bind(this);
      this.submitAppDetail = this.submitAppDetail.bind(this);
          
      //Nice to have
        //Update job application
        //Delete job application
  }

  componentDidMount() {
    this.getApiInfo();
  }

  //componentDidUpdate() {
    // this.getApps(this.state.currentUser);
  //}

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

  async submitLogin (event) {
    if (event) event.preventDefault();

    const formChange = {...this.state.formChange};
    formChange.isUser = '';
    this.setState({formChange})

    const { username, password } = formChange;
    const reqData = username + ' ' + password;
    try {
      const res = await fetch('/api/login', {
        method: 'get',
        headers: {
          "Content-Type": "text/plain",
          'Authorization': reqData
        }
      })
      if (res.status !== 200){
        formChange.isUser = 'Invalid username or password'
        this.setState({formChange})
      } else {
        const data = await res.json();
        this.setCurrentUser(data);
      }
      return res;
    } catch (err) {
      console.log(err);
    }
  }

  async submitSignUp () {
    const { username, password } = this.state.formChange;
    try{
      const res = await fetch('/api/signup', {
        method: 'post',
        body: JSON.stringify({
          username: username,
          password: password.toString()
        }),
        headers: {
          'Content-Type' : 'application/json; charset=UTF-8'
        }
      })
      if (res.status === 200){
        const data = await res.json();
        this.setCurrentUser(data);
      }
      return res;
    } catch (err) {
      console.log(err);
    }
  }

  setCurrentUser (data) {
    const currentUser = {...this.state.currentUser};
    currentUser.username = data.user.username;
    currentUser.id = data.user._id;
    this.setState({currentUser}, () => {
      console.log('set current user: ', this.state.currentUser)
    })
  }
  
  addApplication(job) {
    const { category, candidate_required_location, company_name, job_type, salary } = job;
    const reqBody = {
      user_account_id: this.state.currentUser.id,
      role_title: category,
      company: company_name,
      location: candidate_required_location,
      interview_number: '',
      application_submitted: '',
      follow_up_deadline: '',
      job_type: job_type,
      salary: salary,
      application_status: ''
    };
    console.log(reqBody)
    // POST request to backend
    fetch('/api/newApp',{
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }})
      .then(data => {
        let updatedApplicationList = this.state.applications.push(data)
        this.setState({applications: updatedApplicationList})
      });
    console.log('POST request sent')
    return;
  }

   getApps(user) {      // get all user application data from database 
    // fetch('', {       //endpoint for getting all user applications
    //   method: 'GET',
    //   body: JSON.stringify({ username: user }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })   
    //   .then(data => data.json())
    //   .then(data => {
    //     let updatedApplicationList = this.state.applications.push(data)
    //     this.setState({applications: updatedApplicationList})
    // })
    //   .catch(err => console.log('error getting user applications: ', err));
  }

  submitAppDetail(detail) {
    
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
            isUser={this.state.formChange.isUser}
            setCurrentUser={this.setCurrentUser} 
            handleChange={this.handleChange}
            submitLogin={this.submitLogin}
          />}
        />
          <Route
            exact
            path="/signup"
            element={ <SignUp 
              setCurrentUser={this.setCurrentUser}              
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
            path="/tracker"
            element={ <ApplicationToDoList 
              applications={this.state.aplications}
              currentUser={this.state.currentUser}
              currentApp={this.state.currentApp}
            /> }
          />
      </Routes>
    </div>
    )
   }
  }


export default App;