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
    let haveResult = this.state.emailAddress;
    const renderResultOrPrompt = () => {
      if (haveResult) {
        return <Result/>
      } else {
        return <div>NO result yet :(</div>
      }
    }


    return (
      <div className="App">
        {/* <h1>{this.state.response.body}</h1> */}
        <div class="container">
          <h1>Email guessser!</h1>
          <Form/>
          {renderResultOrPrompt()}
        </div>
      </div>
    );
  }
}

export default App;