import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import './NavbarCollapse.css';
import logo from '../../TestImages/Locavori-Horizontal-Logo.png';
import LogOutButton from '../Login-Logout/LogOutButton/LogOutButton';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faHamburger } from '@fortawesome/free-solid-svg-icons'

const home = <FontAwesomeIcon icon={faHome}/>
const account = <FontAwesomeIcon icon={faUser}/>
const burger = <FontAwesomeIcon icon={faHamburger}/>

const HomeNav = (props) => {

    let loginLinkData = {
        path: '/login',
        text: 'LOGIN / REGISTER',
      };
    
      if (props.store.user.id != null) {
        loginLinkData.path = '/home';
        loginLinkData.text = <LogOutButton/>;
      }

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navContainer">
      
        <Navbar className="topNav" light expand="md">
            <Nav className="ml-auto" navbar>

              {props.store.user.admin && (
                <NavItem className="nav-item">
                  <Link className="nav-link loginOut" to='/adminPage' onClick={toggle}>ADMIN</Link>
                </NavItem>
              )}

                <NavItem className="nav-item">
                    <Link className="nav-link loginOut" to={loginLinkData.path} onClick={toggle}>{loginLinkData.text}</Link>
                </NavItem>
            </Nav>
        </Navbar>

      <Navbar className="navBar" light expand="md">
        
          <NavbarBrand
            className="brand"
            href="/">
              <img 
                src={logo}
                alt="logo"
                className="navLogo"
              />
          </NavbarBrand>

        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>

          <Nav className="ml-auto" navbar>

            <NavItem className="nav-item">
                <Link className="nav-link nav-link2 navContents" to='/home' onClick={toggle}>{home} HOME</Link>
            </NavItem>
            <NavItem>
                {/* Will need to send over user ID to the profile page link which will determine whether or not they are a maker */}
                {props.store.user.id && (
                    <Link className="nav-link nav-link2 navContents" to='/profile' onClick={toggle}>{account} ACCOUNT</Link>
                )} 
            </NavItem>

            <NavItem>
              {props.store.user.id ?
                <Link className="nav-link nav-link2 navContents" to='/maker-registration' onClick={toggle}>{burger} BECOME A MAKER</Link>
                :
                <Link className="nav-link nav-link2 navContents" to='/maker-registration1' onClick={toggle}>{burger} BECOME A MAKER</Link>
              }
            </NavItem>
          </Nav>
            

        </Collapse>
      </Navbar>
      
      

      <div className="navImg">
        <Navbar>
          <Row className="title">
            <Col>
              <h1>Connecting local makers to hungry neighbors</h1>
              <hr className="whiteHr"/>
            </Col>
          </Row>  
        </Navbar>
      </div>
    </div>
  );
}

export default connect(mapStoreToProps)(HomeNav);