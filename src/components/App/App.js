import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import ProfilePage from '../ProfilePages/UserProfile/UserProfile';
import HomePage from '../HomePage/HomePage';
import LoginPage from '../Login-Logout/LoginPage/LoginPage';
import UserRegisterPage from '../Registration/UserRegistration/UserRegisterPage/UserRegisterPage';
import RegisterOptions from '../Registration/RegisterOptions/RegisterOptions';
import MakerRegisterPage from '../Registration/MakerRegistration/MakerRegisterPage/MakerRegisterPage';
import MakerPage from '../ProfilePages/MakerProfile/MakerProfile';
import MakerRegistrationPgOne from '../Registration/MakerRegistration/MakerRegistrationFirstPage/MakerRegistrationUserInfoPage';

import './App.css';
import AdminPage from '../AdminPage/AdminPage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <Router>
        <div>

          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

           
            <Route
              // shows HomePage at all times (logged in or not)
              exact
              path="/home"
              component={HomePage}
            />
            
            <Route
              exact
              path="/register-options"
              component={RegisterOptions}
            />
            
            <Route
              exact
              path="/maker-registration"
              component={MakerRegisterPage}
            />
            
            <Route
              exact
              path="/maker-registration1"
              component={MakerRegistrationPgOne}
            />
            
            <Route
              exact path="/adminPage"
              component={AdminPage}
            />


            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the ProfilePage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/profile*/}

            <ProtectedRoute
              exact
              path="/profile"
              component={ProfilePage}
            />

            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/home"
              // - else shows LoginPage at /login
              exact
              path="/login"
              component={LoginPage}
              authRedirect="/home"
            />
            <Route
              exact
              path="/user-registration"
              component={UserRegisterPage}
            />

            <Route
              exact
              path="/makerCard/:id"
              component={MakerPage}
            />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
