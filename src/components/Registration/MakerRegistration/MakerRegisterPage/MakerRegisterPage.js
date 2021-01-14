import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import MakerRegisterForm from '../MakerRegisterForm/MakerRegisterForm';
import DesktopNav from '../../../Navbars/DesktopNav';
import { Col, Row } from 'reactstrap';

class MakerRegisterPage extends Component {

  render() {
    return (
      <div>
        <DesktopNav/>
        <div className="registrationBody">
        <Row>
          <Col className="registerHeader">
            <h1>Register as a Maker</h1>
          </Col>
          
        </Row>

        <MakerRegisterForm/>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(MakerRegisterPage);
