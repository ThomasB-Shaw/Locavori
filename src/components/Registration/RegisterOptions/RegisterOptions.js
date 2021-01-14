import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import './RegisterOptions.css';
import MakerToolTip from './ToolTips/MakerToolTip';
import UserToolTip from './ToolTips/UserToolTip';
import DesktopNav from '../../Navbars/DesktopNav';

class RegisterOptions extends Component {

  // registerRoute = (route) => {
  //   if (route === 'maker'){
  //     this.props.history.push('/maker-registration')
  //   }
  //   else if (route === 'user'){
  //     this.props.history.push('/user-registration')
  //   }
  //   return;
  // }

  render() {
    return (
      <>
      <DesktopNav/>
      <div className="registerOptionsBody">
        
        <div className="registerOptionsCard">
          <h1>Register Options</h1>
          <hr className="registerOptionsHr"/>

          <div className="buttonsContainer">
            <MakerToolTip/>
            <UserToolTip/>
          </div>
        </div> 

      </div>
      </>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(RegisterOptions));