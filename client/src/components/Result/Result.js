import React, { Component } from 'react';
import './Result.scss';

class Result extends Component {
  
  componentDidMount() {
  }

  render() {
    return (
      <div className="result-container">
        {this.props.unsuccessfulResponse ? (
          <h2 className="result">
            {this.props.emailAddress}
          </h2> ) : (
            <h2 className="result">
            I guess their email is: {this.props.emailAddress}
          </h2>
          )
        }
      </div>

    );
  }
}

export default Result;