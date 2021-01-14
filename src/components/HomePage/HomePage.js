import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// FILTER OPTIONS
import MakerOptions from '../FilterOptions/MakerOptions';
import DeliveryOptions from '../FilterOptions/DeliveryOptions';
import LocationOptions from '../FilterOptions/LocationOptions';
import ProductOptions from '../FilterOptions/ProductOptions';
import AvailabilityOptions from '../FilterOptions/AvailabilityOptions';
import DietaryRestrictions from '../FilterOptions/DietaryRestrictions';

// MAP & LIST
import Map from './MapView/MapView';

// NAVBAR
import HomeNav from '../Navbars/HomeNav';

// CSS
import './HomePage.css';
import '../FilterOptions/Filters.css';

// BOOTSTRAP
import { Col, Row, Button } from 'reactstrap';


class HomePage extends Component {

  componentDidMount = () => {
    // Get all makers from DB
    this.props.dispatch({type: 'GET_MAKERS'});
    // Gets an array of favorites for each user and is used to restrict a maker getting added multiple times to the favorites list.
    this.props.dispatch({ type: 'GET_SPECIFIC_FAVORITES' }); 
    // console.log("SPECIFIC FAVS", this.props.store.SF);
         
  };

  filterGet = () => {
    // Gets the response for the desired filters
    this.props.dispatch({type: 'FILTER_MAKERS', payload: this.props.store.filters});
  };

  render() {
    return (
      <div className="homePageBody">

        <HomeNav/>

        <div className="filterMapBody">
        
          <Row>
            <Col xs="12" lg="4" xl="3" className="filterContainer">
              <h2>Filters</h2>
              <hr/>
              <AvailabilityOptions/>
              <DeliveryOptions/>
              <MakerOptions/>
              <LocationOptions/>
              <ProductOptions/>
              <DietaryRestrictions/>
              <Button className="filterGoBtn" onClick={this.filterGet}>Search</Button>
            </Col>

            <Col xs="12" lg="8" xl="9">
              <h2>Find Local Makers</h2>
              <hr/>
              <Map/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(HomePage);
