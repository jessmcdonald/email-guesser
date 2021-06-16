import React, { Component } from 'react';
import './Result.scss';

class Result extends Component {
  
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h2 className="result-header">
          I guessss their email is:
        </h2>
        <h2 className="result">
          {this.props.emailAddress}
        </h2>
      </div>

    );
  }
}

export default Result;