import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import PageOneForm from '../MakerRegistrationFirstPage/MakerRegisterUserInfoForm';
import DesktopNav from '../../../Navbars/DesktopNav';

class MakerRegisterPageOne extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <>
        <DesktopNav/>
        <div className="userRegisterBody">
          <PageOneForm />
        </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(MakerRegisterPageOne);