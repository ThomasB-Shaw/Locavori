import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import {  Col, Row, FormGroup, Label, Input } from 'reactstrap';




class BusinessSpecs extends Component {

  // If checkbox is checked after click, id is sent to the redux store
  // The id is removed from the redux store if the checkbox is unchecked after click
  handleChangeType = (event) => {
    if (document.getElementById(event.target.id).checked) {
        this.props.dispatch({type: 'ADD_BUSINESS_TYPE', payload: event.target.id});
    } else {
        this.props.dispatch({type: 'REMOVE_BUSINESS_TYPE', payload: event.target.id});
    }
  }

  handleChangeLicense = (event) => {
    if (document.getElementById(event.target.id).checked) {
        this.props.dispatch({type: 'ADD_BUSINESS_LICENSE', payload: event.target.id});
    } else {
        this.props.dispatch({type: 'REMOVE_BUSINESS_LICENSE', payload: event.target.id});
    }
  }

  // On changed of text inputs, the new value is sent to the redux store with a unique key/, value pair
  handleChange = (event, eventType) => {
    this.props.dispatch({type: 'ADD_BUSINESS_SPECS', payload: {key: eventType, value: event.target.value}});
  } 

    render(){
        return(

          <>
            <br/>
            <h4>Web Presence</h4>
            <hr/>
            
              <FormGroup className="makerAppGroup">

                <Row>
                  <Col>
                    <Label>Website
                    <Input className="makerAppInput" type="text" placeholder="URL" onChange={(event) => this.handleChange(event, 'website')}></Input>
                    </Label>
                  </Col>

                  <Col>
                    <Label>Facebook
                    <Input className="makerAppInput" type="text" placeholder="URL" onChange={(event) => this.handleChange(event, 'facebook')}></Input>
                    </Label>
                  </Col>
                  </Row>

                  <Row>
                  <Col>
                    <Label>Instagram
                    <Input className="makerAppInput" type="text" placeholder="URL" onChange={(event) => this.handleChange(event, 'instagram')}></Input>
                    </Label>
                  </Col>

                  <Col>
                    <Label>Public Email Address
                    <Input className="makerAppInput" type="text" placeholder="" onChange={(event) => this.handleChange(event, 'public_email')}></Input>
                    </Label>
                  </Col>
                </Row>

              </FormGroup>
    
            <br/>
            
            <h4>Business License</h4>
            <hr/>

              <FormGroup className="makerAppGroup">
                
                <Label className="h5">Do you have a business food/liquor license that allows you to sell to the public? *</Label>
                  <Row>
                    <Col sm={{ size: 5, offset: 1 }}>
                      <Label check>
                        <Input type="checkbox" id="commercial" onChange={(event) => this.handleChangeLicense(event)}/>
                          Commercial Food License (I can sell through resellers)
                      </Label>
                    </Col>

                    <Col sm={{ size: 5, offset: 1 }}>
                      <Label check>
                        <Input type="checkbox" id="alcohol" onChange={(event) => this.handleChangeLicense(event)}/>
                          Commercial Alcohol License
                        </Label>
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={{ size: 5, offset: 1 }}>
                      <Label check>
                        <Input type="checkbox" id="cottage" onChange={(event) => this.handleChangeLicense(event)}/>
                        Cottage/Pickle Law License (I have a limited license)
                      </Label>
                    </Col>

                    <Col sm={{ size: 5, offset: 1 }}>
                      <Label check>
                        <Input type="checkbox" id="other" onChange={(event) => this.handleChangeLicense(event)}/>
                        Other Type of License 
                      </Label>
                    </Col>
                  </Row>

                <br/>

                  <Row>
                    <Col>
                      <Label className="h5">What State/Province is your license issued from and what is your license # and type of license?</Label>
                        <Input type="text" placeholder="" onChange={(event) => this.handleChange(event, 'license_id_state')}></Input>
                    </Col>
                  </Row>
              </FormGroup>
    
            <br/>

            <h4>Type of Business</h4>
            <hr/>

              <FormGroup className="makerAppGroup">
                <Label className="h5">What type of business describes yours? *</Label>
                <p>select all that apply</p>

                  <Row>
                    <Col sm={{ size: 5, offset: 1 }}>
                      <Label check>
                        <Input type="checkbox" id="farmer" onChange={(event) => this.handleChangeType(event)}/>
                        Farmer-Grower
                      </Label>
                        <br/>
                      <Label check>
                        <Input type="checkbox" id="forager" onChange={(event) => this.handleChangeType(event)}/>
                        Forager 
                      </Label>
                        <br/>
                      <Label check>
                        <Input type="checkbox" id="maker" onChange={(event) => this.handleChangeType(event)}/>
                        Maker
                        </Label>
                        <br/>
                      <Label check>
                        <Input type="checkbox" id="distiller" onChange={(event) => this.handleChangeType(event)}/>
                        Distiller 
                      </Label>
                        <br/>
                      <Label check>
                        <Input type="checkbox" id="brewer" onChange={(event) => this.handleChangeType(event)}/>
                        Brewer
                      </Label>
                        <br/>
                      <Label check>
                        <Input type="checkbox" id="winemaker" onChange={(event) => this.handleChangeType(event)}/>
                        Winemaker
                      </Label>
                    </Col>

                    <Col sm={{ size: 5, offset: 1 }}>
                        <br/>
                      <Label check>
                        <Input type="checkbox" id="cidery" onChange={(event) => this.handleChangeType(event)}/>
                        Cidery
                      </Label>
                        <br/>
                      <Label check>
                        <Input type="checkbox" id="roaster" onChange={(event) => this.handleChangeType(event)}/>
                        Roaster
                      </Label>
                        <br/>
                      <Label check>
                        <Input type="checkbox" id="apiary" onChange={(event) => this.handleChangeType(event)}/>
                        Apiary (bees)
                      </Label>
                        <br/>
                      <Label check>
                        <Input type="checkbox" id="woman_owned" onChange={(event) => this.handleChangeType(event)}/>
                        Women Owned
                      </Label>
                        <br/>
                      <Label check>
                        <Input type="checkbox" id="poc_owned" onChange={(event) => this.handleChangeType(event)}/>
                        P.O.C. Owned
                      </Label>
                        <br/>
                      <Label check>
                        <Input type="checkbox" id="other" onChange={(event) => this.handleChangeType(event)}/>
                        Other
                      </Label>
                    </Col>
                  </Row>
              </FormGroup>
            </>
        )
    }
}



export default withRouter(connect(mapStoreToProps)(BusinessSpecs));