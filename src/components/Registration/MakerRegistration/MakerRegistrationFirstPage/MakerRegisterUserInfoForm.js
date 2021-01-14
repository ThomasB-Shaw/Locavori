import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import './MakerRegisterFirstPage.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class MakerRegisterUserForm extends Component {

  // *** EMAIL IS USERNAME! ***

  state = {
    firstName: '',
    lastName: '',
    birthDate: '',
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();
    
    this.props.dispatch({
      type: 'REGISTER_AS_MAKER',
      payload: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        birthDate: this.state.birthDate,
        username: this.state.username,
        password: this.state.password,
      },
    });

    this.props.history.push('/maker-registration')
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <Form className="formPanel userRegisterForm">
        <h2>CREATE A MAKER ACCOUNT</h2>
        <hr className="registerOptionsHr"/>
        <h4>Let's get some basic info first</h4>
        <br/>
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}

        <FormGroup>
          <Label htmlFor="firstName">
            First Name:
            <Input
              className="userRegisterInput"
              type="text"
              name="firstName"
              value={this.state.firstName}
              required
              onChange={this.handleInputChangeFor('firstName')}
            />
          </Label>
          <Label htmlFor="lastName">
            Last Name:
            <Input
              className="userRegisterInput"
              type="text"
              name="lastName"
              value={this.state.lastName}
              required
              onChange={this.handleInputChangeFor('lastName')}
            />
          </Label>
          <Label htmlFor="birthDate">
            Birth Date:
            <Input
              className="userRegisterInput"
              type="date"
              name="birthDate"
              value={this.state.birthDate}
              required
              onChange={this.handleInputChangeFor('birthDate')}
            />
          </Label>
          <Label htmlFor="email">
            Email:
            <Input
              className="userRegisterInput"
              type="email"
              name="email"
              value={this.state.username}
              required
              onChange={this.handleInputChangeFor('username')}
            />
          </Label>
          <Label htmlFor="password">
            Password:
            <Input
              className="userRegisterInput"
              type="password"
              name="password"
              value={this.state.password}
              required
              onChange={this.handleInputChangeFor('password')}
            />
          </Label>
        </FormGroup>

          <Button
            onClick={this.registerUser}
            color="success">
              Continue
          </Button>

      </Form>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(MakerRegisterUserForm));