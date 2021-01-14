import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Col, FormGroup, Label, Input } from 'reactstrap';
import ProductTypePrepared from './ProductTypePrepared/ProductTypePrepared';
import ProductTypeFresh from './ProductTypeFresh/ProductTypeFresh';
import ProductTypeBeverage from './ProductTypeBeverage/ProductTypeBeverage';
import ProductCategories from './ProductCategories/ProductCategories';

class ProductInfo extends Component {
    
    // Sends availability to the redux store
    handleRadio = (event) => {
        this.props.dispatch({type: 'AVAILABILITY', payload: event.target.id});
    }

    // On changed of text inputs, the new value is sent to the redux store with a unique key/value pair
    handleChange = (event, eventType) => {
        this.props.dispatch({type: 'PRODUCT_INFO', payload: {key: eventType, value: event.target.value}});
      }

    render(){
        return(
            <>
            <h4>Availability</h4>
            <hr/>
                <FormGroup className="makerAppGroup">
                    <Col>
                        <h5>Is your product available year round or limited availability?*</h5>
                        <Label check sm={{ size: 2, offset: 1 }}>
                            <Input type="radio" name="availability" id="always" onChange={(event) => this.handleRadio(event)}/>
                            Available All Year
                        </Label>
                        
                        <Label check sm="2">
                            <Input type="radio" name="availability" id="limited" onChange={(event) => this.handleRadio(event)}/>
                            Limited Availability
                        </Label>
                        <br></br>
                    </Col>
                </FormGroup>

            
            <h4>Product Types</h4>
            <hr/>
                <FormGroup className="makerAppGroup">
                    <Col>
                        <h5>Do you have any prepared/packaged, shelf-stable, or refrigerated food product types that apply to your offerings? *</h5>
                        {/* selecting yes opens dropdown card */}
                        <ProductTypePrepared/>
                        <br/>
                    </Col>
                </FormGroup>

                <FormGroup className="makerAppGroup">
                    <Col>
                        <h5>Do you have any fresh food product types that you grow/raise? *</h5>
                        {/* selecting yes opens dropdown card */}
                        <ProductTypeFresh/>
                        <br/>
                    </Col>
                </FormGroup>

                <FormGroup className="makerAppGroup">
                    <Col>
                        <h5>Do you have any beverage product types that apply to your offerings? *</h5>
                        {/* selecting yes opens dropdown card */}
                       <ProductTypeBeverage/>
                        <br/>
                    </Col>
                </FormGroup>

                <br></br>
                {/* checklist in ProductCategories.js */}
                <ProductCategories/>
                <br/>
                <FormGroup className="makerAppGroup">
                    <h5>What are a few of your specialties?</h5>
                        <p>Flavors, best-sellers, etc.</p>
                            <Input type="text" placeholder="This will be displayed" onChange={(event) => this.handleChange(event, 'specialties')}></Input>

                    <br/>

                    <h5>List any related awards you have won or been a finalist for:</h5>
                        <p>Separate each item with a comma</p>
                            <Input type="text" placeholder="For example: MN State Fair grand champion" onChange={(event) => this.handleChange(event, 'awards')}></Input>

                    <br/>

                    <h5>What makes your products unique?</h5>
                        <p>We love to hear this!</p>
                            <Input type="text" placeholder="This will be displayed" onChange={(event) => this.handleChange(event, 'unique')}></Input>
                </FormGroup>

            </>
        )
    }
}



export default withRouter(connect(mapStoreToProps)(ProductInfo));