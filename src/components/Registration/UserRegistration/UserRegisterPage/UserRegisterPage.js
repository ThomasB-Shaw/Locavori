import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import '../UserRegistration.css';
import DesktopNav from '../../../Navbars/DesktopNav';

// CUSTOM COMPONENTS
import UserRegisterForm from '../UserRegisterForm/UserRegisterForm';

class UserRegisterPage extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <>
      <DesktopNav/>
      <div className="userRegisterBody">
        <UserRegisterForm />
      </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(UserRegisterPage);
