import React, { Component } from 'react';
import './App.scss';
import axios from 'axios'
import Form from './components/Form/Form';
import Result from './components/Result/Result';

class App extends Component {
  state = {
    emailAddress: true
  };
  
  componentDidMount() {
    axios.get('/api/v1/ahoy-there').then((res) => {
      const response = res.data;
      this.setState({response});
    });
  }

  render() {
    return (
      <div className="App">
        {/* <h1>{this.state.response.body}</h1> */}
        <div className="container">
          <h1>Email guessser!</h1>
          <Form/>

          {this.state.emailAddress ? (
            <Result />
          ) : (
            <div> No result yet :(</div>
          )}
        </div>
      </div>
    );
  }
}

export default App;