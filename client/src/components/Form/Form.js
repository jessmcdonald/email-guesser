import React, { Component } from 'react';
import './Form.scss';
import axios from 'axios'

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName : '',
      domain : '',
      emailAddress : ''
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("you are submitting" + this.state.fullName + this.state.domain);
  }


  getEmail = () => {
    axios({
      method: 'get',

    })
      .get('/api/v1/ahoy-there')
      .then((res) => {
        const response = res.data;
        this.setState({ emailAddress : response});
      })
      .catch(error => {
        this.setState({ error : error.message });
        console.log(error);
      });
  }

  render() {
    return (
      <form className="input-form" onSubmit={this.handleSubmit}>

        <label htmlFor="fname">Full name:</label>
        <input type="text" id="name" name="fullName" value={this.state.fullName} onChange={this.handleChange}></input>

        <label htmlFor="lname">Domain:</label>
        <input type="text" id="domain" name="domain" value={this.state.domain} onChange={this.handleChange}></input>

        <input type="submit" className="submit-button" value="Submit"></input>

      </form>
    );
  }
}

export default Form;