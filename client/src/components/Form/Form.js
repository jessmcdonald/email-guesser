import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
  handleChange = (event) => {
    this.props.onChange(event);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit();
  }


  render() {
    return (
      <form className="input-form" onSubmit={this.handleSubmit}>

        <label htmlFor="fname">Full name:</label>
        <input type="text" id="name" name="fullName" placeholder="Jeff Mangum" value={this.props.fullName} onChange={this.handleChange}></input>

        <label htmlFor="lname">Domain:</label>
        <input type="text" id="domain" name="domain" placeholder="@babbel.com" value={this.props.domain} onChange={this.handleChange}></input>

        <input type="submit" className="submit-button" value="Submit"></input>

      </form>
    );
  }
}

export default Form;