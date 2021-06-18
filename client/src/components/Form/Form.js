import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
  constructor(props){
    super(props);

    this.state = {
      fullNameError : '',
      domainError : '',
      submitError: ''
    };

  }
  handleChange = async (event) => {
    await this.props.onChange(event);
    this.setState({submitError: ''});

    switch(event.target.name) {
      case 'fullName' :
        this.validateFullname();
        break;
      case 'domain' :
        this.validateDomain();
        break;
      default :
        break;
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(!this.state.fullNameError && !this.state.domainError) {
      this.props.onSubmit();
    } else {
      this.setState({
        submitError: 'Please check your entries'
      })
    }
  }

  validateFullname = () => {
    let regFullName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    let fullName = this.props.fullName;
    if(!regFullName.test(fullName)) {
      this.setState({
        fullNameError : 'Please enter a full name (first name and last name separated by a space)'
      })
    } else {
      this.setState({
        fullNameError : ''
      })
    }
  }

  validateDomain = () => {
    let domain = this.props.domain;
    if(!domain.includes('.')) {
      this.setState({
        domainError : 'Please enter a valid email domain (e.g. @babbel.com)'
      })
    } else {
      this.setState({
        domainError : ''
      })
    }
  }


  render() {
    return (
      <form className="input-form" onSubmit={this.handleSubmit}>

        <label htmlFor="fname">Full name:</label>
        <input type="text" id="name" name="fullName" placeholder="Jeff Mangum"
          value={this.props.fullName}
          onChange={this.handleChange}>
        </input>
        <div className="fullname-error">
        {this.state.fullNameError ? (
            this.state.fullNameError
          ) : ('')}
        </div>

        <label htmlFor="lname">Domain:</label>
        <input type="text" id="domain" name="domain" placeholder="@babbel.com"
          value={this.props.domain}
          onChange={this.handleChange}>
        </input>
        <div className="domain-error">
        {this.state.domainError ? (
            this.state.domainError
          ) : ('')}
        </div>

        <input type="submit" className="submit-button" value="Submit"></input>

        <div className="submit-error">
        {this.state.submitError ? (
            this.state.submitError
          ) : ('') }
        </div>

      </form>
    );
  }
}

export default Form;