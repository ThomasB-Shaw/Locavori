import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';
import './LoginPage.css';
import DesktopNav from '../../Navbars/DesktopNav';
import { Col, Container, Row } from 'reactstrap';

class LoginPage extends Component {
  render() {
    return (
      <>
      <DesktopNav/>
      <div className="loginBody">

        <Row>
          <Col sm="6" lg="8" xl="9" className="loginImg">
            <div>
              <Container>
              <div className="loginTitle">
                <h1>Connecting local makers to hungry neighbors</h1>
                <hr/>
              </div>
              </Container>
              
            </div>
          </Col>
        
          <Col sm="6" lg="4" xl="3" className="loginFormContainer">
            <LoginForm />
          </Col>
        
        </Row>
      </div>
      </>
    );
  }
}

export default connect(mapStoreToProps)(LoginPage);
