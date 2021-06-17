import React, { Component } from 'react';
import './App.scss';
import axios from 'axios'
import Form from './components/Form/Form';
import Result from './components/Result/Result';

class App extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      fullName : '',
      domain : '',
      emailAddress : '',
      response: ''
    };
  }
  
  componentDidMount() {
    axios.get('/api/v1/ahoy-there').then((res) => {
      const response = res.data;
      this.setState({response});
    });
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
    axios.post('/api/v1/ahoy-there', {
      FullName: this.state.fullName.toLowerCase(),
      Domain: this.addAtIfMissing(this.state.domain.toLowerCase())
    })
    .then((res) => {
      const response = res.data;
      this.setState({
        fullName : '',
        domain : '',
        emailAddress : response.body});
    })
    .catch(error => {
      this.setState({ error : error.message });
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        {/* <h1>{this.state.response.body}</h1> */}
        <div className="container">
          <h1>Email guessser!</h1>
          <Form
            fullName={this.state.fullName}
            domain={this.state.domain}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />

          {this.state.emailAddress ? (
            <Result
              emailAddress={this.state.emailAddress}
            />
          ) : (
            <div> No result yet :(</div>
          )}
        </div>
      </div>
    );
  }
}

export default App;