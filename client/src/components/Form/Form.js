import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
  state = {
    response: {}
  };
  
  componentDidMount() {
  }

  render() {
    return (
      <form className="input-form">
        <label for="fname">Full name:</label>
        <input type="text" id="fname" name="fname"></input>
        <label for="lname">Domain:</label>
        <input type="text" id="lname" name="lname"></input>
        <input type="submit" class="submit-button" value="Submit"></input>
      </form>
    );
  }
}

export default Form;