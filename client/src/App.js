import React, { Component } from 'react';
import './App.scss';
import axios from 'axios'
import Form from './components/Form/Form';
import Result from './components/Result/Result';

// TODO tried nock test in App.test.js
// axios.defaults.baseURL = 'https://jessss.com';

// axios.interceptors.request.use(request => {
//   console.log('Starting Request', JSON.stringify(request, null, 2));
//   return request});

class App extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      fullName : '',
      domain : '',
      emailAddress : '',
      unsuccessfulResponse : '',
    };
  }
  
  onChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
      });
  }

  addAtIfMissing = (domain) => {
    if (domain.charAt(0) === '@') {
      return domain;
    } else {
      return '@' + domain;
    }
  }

  onSubmit = () => {
    axios.post('/api/v1/get-email', {
      FullName: this.state.fullName.toLowerCase(),
      Domain: this.addAtIfMissing(this.state.domain.toLowerCase())
    })
    .then((res) => {
      const response = res.data;
      console.log(res.status);
      this.setState({
        fullName : '',
        domain : '',
        emailAddress : response.body,
        unsuccessfulResponse : ''});
    })
    .catch(error => {
      this.setState({ unsuccessfulResponse : "Please check you have entered a full name and domain" });
      console.log(error.message);
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Email guessser!</h1>
          <Form
            fullName={this.state.fullName}
            domain={this.state.domain}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />

          <div className="footer">
            <Result
              emailAddress={this.state.emailAddress}
              unsuccessfulResponse={this.state.unsuccessfulResponse}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;