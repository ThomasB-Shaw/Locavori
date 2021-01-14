import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Col, Row, FormGroup, Label, Input } from 'reactstrap';

class ProductCategories extends Component {
    

    // If checkbox is checked after click, id is sent to the redux store
    // The id is removed from the redux store if the checkbox is unchecked after click
    handleChange = (event) => {
        if (document.getElementById(event.target.id).checked) {
            this.props.dispatch({type: 'ADD_PRODUCT_CATEGORY', payload: event.target.id});
        } else {
            this.props.dispatch({type: 'REMOVE_PRODUCT_CATEGORY', payload: event.target.id});
        }
    }

    render(){
        return(
            <>
            <FormGroup className="makerAppGroup">
                    <h5>Which categories do your products fit into?</h5>
                    <p>Select all that apply</p>

                    <Row>
                        <Col sm={{ size: 5, offset: 1 }}>
                            
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="snack" type="checkbox"/>
                                Snack
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="sweet_treat" type="checkbox"/>
                                Sweet Treat
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="savory_treat" type="checkbox"/>
                                Savory Treat
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="healthy" type="checkbox"/>
                                Healthy
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="gluten_free" type="checkbox"/>
                                Gluten Free
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="vegan" type="checkbox"/>
                                Vegan
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="dairy_free" type="checkbox"/>
                                Dairy Free
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="organic" type="checkbox"/>
                                Organic
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="local" type="checkbox"/>
                                Majority of your product is locally grown (grown within your state or neighboring state)
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="fair_trade" type="checkbox"/>
                                Fair Trade Sourced
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="farmer_made" type="checkbox"/>
                                Farmer/Grower made
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="small_batch" type="checkbox"/>
                                Small Batch
                            </Label>
                        </Col>

                        <Col sm={{ size: 5, offset: 1 }}>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="handmade" type="checkbox"/>
                                Handmade
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="non_gmo" type="checkbox"/>
                                Non GMO
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="no_trans_fats" type="checkbox"/>
                                No Trans Fats
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="no_corn_syrup" type="checkbox"/>
                                No High Fructose Corn Syrup
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="nitrate_free" type="checkbox"/>
                                Nitrate Free
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="award_winning" type="checkbox"/>
                                Award Winning
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="keto" type="checkbox"/>
                                Keto/Low Carb
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="nut_free" type="checkbox"/>
                                Nut Free
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="kosher" type="checkbox"/>
                                Kosher
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="low_sodium" type="checkbox"/>
                                Low Sodium
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="gift" type="checkbox"/>
                                Gift
                            </Label>
                            <br/>
                            <Label>
                                <Input onClick={(event) => this.handleChange(event)} id="other" type="checkbox"/>
                                Other
                            </Label>
                        </Col>
                    </Row>
                </FormGroup>
            </>
        )
    }
}



export default withRouter(connect(mapStoreToProps)(ProductCategories));