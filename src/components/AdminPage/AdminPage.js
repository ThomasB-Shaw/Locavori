import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AdminTabs from './AdminTabs/AdminTabs';
import DesktopNav from '../Navbars/DesktopNav';
import './AdminPage.css';
import { Container } from 'reactstrap';

class AdminPage extends Component {



  render() {
    return (
      <div className="adminBody">
          <DesktopNav/>
          {/* conditional that checks if you have admin
          access or not via tbl_profile boolean value */}
          {this.props.store.user.admin ?
            <>
            <div className="adminPageTitle">
              <Container>
                <h1>Manage Makers</h1>
              </Container>
              
            </div>
            <Container>
              <AdminTabs/>
            </Container>
            </>
          :
          <Container>
            <h1>Sorry, you do not have access to this page</h1>
          </Container>
          }    
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AdminPage);
