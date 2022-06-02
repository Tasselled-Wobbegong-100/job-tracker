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
      detailChange: {
        application_submitted: '',
        application_status: '',
        interview_number: '',
        follow_up_deadline: '',
      },
      applications: [ {_id: 26,
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
      this.getCurrentApp = this.getCurrentApp.bind(this);
      this.deleteApp = this.deleteApp.bind(this);
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
    if (id === 'UpdateStatus') {
      const detailChange = {...this.state.detailChange};
      detailChange.application_status = value;
      this.setState({detailChange}, () => console.log(this.state.detailChange.application_status));
    }
    if (id === 'InterviewNum') {
      const detailChange = {...this.state.detailChange};
      detailChange.interview_number = value;
      this.setState({detailChange}, () => console.log(this.state.detailChange.interview_number));
    }
    if (id === 'FollowUp') {
      const detailChange = {...this.state.detailChange};
      detailChange.follow_up_deadline = value;
      this.setState({detailChange}, () => console.log(this.state.detailChange.follow_up_deadline));
    }
    if (id === 'AppSubmitted') {
      const detailChange = {...this.state.detailChange};
      detailChange.application_submitted = value;
      this.setState({detailChange}, () => console.log(this.state.detailChange.application_submitted));
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
        this.getApps(this.state.currentUser);
      }
      return res;
    } catch (err) {
      console.log(err);
    }
  }

  async submitSignUp (event) {
    if (event) event.preventDefault();

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
        this.getApps(this.state.currentUser);
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
      application_status: 'In progress'
    };
    console.log(reqBody)
    // POST request to backend
    fetch('/api/newApp',{
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }})
      .then(() => {
        this.getApps(this.state.currentUser);
      });
    console.log('POST request sent')
    return;
  }

  // NEW FUNCTIONALITY TO DELETE APPLICATIONS ON APPLICATION DISPLAY
  deleteApp(event){
    event.preventDefault();
    const appID = event.target.id.toString();
    const userID = this.state.currentUser.id;

    const reqBody = {
      app_id: appID,
      user_account_id: userID
    }

    fetch('/api/deleteApps', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqBody)
    })
    .then(() => {
      this.getApps(this.state.currentUser);
    });
    console.log('DELETE request sent')
    return;
  }

  async getApps(user) {
    const res = await fetch(`/api/getApps/${user.username}`, {  
      method: 'GET'
    })
    const data = await res.json();
    this.setState({applications: data}, () => console.log('getApps: ', this.state.applications))
    return data;
  }

  async getCurrentApp (event) {
    
    if (event) event.preventDefault();
    const id = event.target.id.toString();

    const res = await fetch(`/api/currentApp/${id}`, {
      method: 'get'
    })
    const data = await res.json();   
    this.setState({currentApp: data}, () => {
      console.log(this.state.currentApp)
    })
  }

  async submitAppDetail(event) {
    if (event) event.preventDefault();
    const { detailChange } = this.state;
    const { _id } = this.state.currentApp;
    // for (const property in detailChange) {
    //   if (detailChange[property] !== '') {
    //     this.setState({...detailChange, [property]: })
    //   }
    // }
    try {
      await fetch(`/api/updateApp/${_id}`, {
        method: 'PATCH',
        body: JSON.stringify({detailChange}),
        headers: {
          'Content-Type' : 'application/json'
        } 
      });
      const res = await fetch(`/api/currentApp/${_id}`, {
        method: 'GET'
      })
      const data = await res.json();   
      this.setState({currentApp: data}, () => {
        console.log(this.state.currentApp)
      });
    }
    catch(err) {
      console.log(err);
    }
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
              jobs={this.state.jobs} 
              currentUser={this.state.currentUser}
              getApiInfo={this.getApiInfo} 
              getCurrentApp={this.getCurrentApp}
              addApplication={this.addApplication} 
              deleteApp={this.deleteApp}
              applications={this.state.applications}
              submitAppDetail={this.submitAppDetail}
            />}
          />
          <Route
            exact
            path="/tracker/:id"
            element={ <ApplicationToDoList 
              currentUser={this.state.currentUser}
              currentApp={this.state.currentApp}
              submitAppDetail={this.state.submitAppDetail}
              handleChange={this.handleChange}
            /> }
          />
      </Routes>
    </div>
    )
   }
  }


export default App;