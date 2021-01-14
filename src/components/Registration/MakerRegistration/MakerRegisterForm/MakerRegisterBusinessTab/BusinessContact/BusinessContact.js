import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import {  Col, Row, FormGroup, Label, Input } from 'reactstrap';
import StateDropdown from './StateDropdown/StateDropdown';
import StateDropdownPublic from './StateDropdown/StateDropdownPublic';


class BusinessContact extends Component {

  handleChange = (event, eventType) => {
    this.props.dispatch({type: 'ADD_CONTACT', payload: {key: eventType, value: event.target.value}});
  } 

    render() {
        return(
          <div>

            <h4>Contact Information</h4>
            <hr/>

            <FormGroup className="makerAppGroup">

              <Row> 
                <Col>
                  <Label>Legal Business Name *
                  <Input className="makerAppInput" type="text" placeholder="This will not be public" onChange={(event) => this.handleChange(event, 'legal_business_name')}></Input>
                  </Label>
                </Col>

                <Col>
                  <Label>Public Business Name *
                  <Input className="makerAppInput" type="text" placeholder="This will be displayed" onChange={(event) => this.handleChange(event, 'public_business_name')}></Input>
                  </Label>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Label>Owner's First Name *
                  <Input className="makerAppInput" type="text" placeholder="This will be displayed" onChange={(event) => this.handleChange(event, 'first_name')}></Input>
                  </Label>
                </Col>

                <Col>
                  <Label>Owner's Last Name *
                  <Input className="makerAppInput" type="text" placeholder="This will be displayed" onChange={(event) => this.handleChange(event, 'last_name')}></Input>
                  </Label>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Label>Owner's Email Address *
                  <Input className="makerAppInput" type="text" placeholder="This will not be public" onChange={(event) => this.handleChange(event, 'email')}></Input>
                  </Label>
                </Col>

                <Col>
                  <Label>Owner's Contact Phone *
                  <Input className="makerAppInput" type="text" placeholder="This will not be public" onChange={(event) => this.handleChange(event, 'phone')}></Input>
                  </Label>
                </Col>
                </Row>

                <Row>
                <Col sm={{size:'auto', offset:6}}>
                  <Label>Alternative Phone
                  <Input className="makerAppInput" type="text" placeholder="This will not be public" onChange={(event) => this.handleChange(event, 'alt_phone')}></Input>
                  </Label>
                </Col>
              </Row>
            </FormGroup>
  
          <h4>Business Address</h4>
          <hr/>

            <FormGroup className="makerAppGroup">
              <Row>
                <Col>
                  <Label>Business Address *
                  <Input className="makerAppInput" type="text" placeholder="This will not be public" onChange={(event) => this.handleChange(event, 'business_address')}></Input>
                  </Label>
                </Col>

                <Col>
                  <Label>Suite #
                  <Input  className="makerAppInput"type="text" placeholder="This will not be public" onChange={(event) => this.handleChange(event, 'business_suite_num')}></Input>
                  </Label>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Label>City *
                  <Input className="makerAppInput" type="text" placeholder="This will not be public" onChange={(event) => this.handleChange(event, 'business_city')}></Input>
                  </Label>
                </Col>

                <Col>
                  {/* state dropdown component */}
                  <StateDropdown/>
                </Col>
                </Row>

                <Row>
                <Col>
                  <Label>Zipcode *
                  <Input className="makerAppInput" type="text" placeholder="This will not be public" onChange={(event) => this.handleChange(event, 'business_zip_code')}></Input>
                  </Label>
                </Col>
              </Row>
            </FormGroup>
  
          
          <h4>Public Address</h4>
          <hr/>

            <FormGroup className="makerAppGroup">

              <Row>
                <Col>
                  <Label>Address
                  <Input className="makerAppInput" type="text" placeholder="This will be displayed" onChange={(event) => this.handleChange(event, 'public_address')}></Input>
                  </Label>
                </Col>

                <Col>
                  <Label>Suite #
                  <Input className="makerAppInput" type="text" placeholder="This will be displayed" onChange={(event) => this.handleChange(event, 'public_suite_num')}></Input>
                  </Label>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Label>City
                  <Input className="makerAppInput" type="text" placeholder="This will be displayed" onChange={(event) => this.handleChange(event, 'public_city')}></Input>
                  </Label>
                </Col>

                <Col>
                  {/* state dropdown component */}
                 <StateDropdownPublic/>
                </Col>
                </Row>

                <Row>
                <Col>
                  <Label>Zipcode
                  <Input className="makerAppInput" type="text" placeholder="This will be displayed" onChange={(event) => this.handleChange(event, 'public_zip_code')}></Input>
                  </Label>
                </Col>
              </Row>
            </FormGroup>
            
          </div>
            

        )
    }
}




export default withRouter(connect(mapStoreToProps)(BusinessContact));