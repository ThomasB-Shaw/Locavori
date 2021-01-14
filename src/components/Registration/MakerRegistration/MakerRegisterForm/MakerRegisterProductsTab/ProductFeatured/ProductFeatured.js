import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Col, Row, FormGroup, Input } from 'reactstrap';


class ProductFeatured extends Component{

    // On changed of text inputs, the new value is sent to the redux store with a unique key/value pair
    handleChange = (event, eventType) => {
        this.props.dispatch({type: 'ADD_FEATURED_PRODUCTS', payload: {key: eventType, value: event.target.value}});
      }

    render(){
        return(
            <>

                <h4>Featured Products</h4>
                <hr/>

                <FormGroup className="makerAppGroup">

                    <Row>
                        <Col>
                            <h5>Product 1</h5> 
                            <p>(link to an image of your product)</p>
                                <Input className="featuredProducts" type="text" placeholder="Product Image URL" onChange={(event) => this.handleChange(event, 'product_one_image')}></Input>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h5>Product Type</h5> 
                            <p>(from Product Type list above)</p>
                                <Input className="featuredProducts" type="text" placeholder="Product Type " onChange={(event) => this.handleChange(event, 'product_one_type')}></Input>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h5>Product URL</h5> 
                            <p>(link to your product on your website)</p>
                                <Input className="featuredProducts" type="text" placeholder="Product URL" onChange={(event) => this.handleChange(event, 'product_one_url')}></Input>
                        </Col>
                    </Row>
                
                <hr/>

                    <Row>
                        <Col>
                            <h5>Product 2 </h5>
                            <p>(link to an image of your product)</p>
                                <Input className="featuredProducts" type="text" placeholder="Product Image URL" onChange={(event) => this.handleChange(event, 'product_two_image')}></Input>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h5>Product Type</h5> 
                            <p>(from Product Type list above)</p>
                                <Input className="featuredProducts" type="text" placeholder="Product Type " onChange={(event) => this.handleChange(event, 'product_two_type')}></Input>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h5>Product URL</h5> 
                            <p>(link to your product on your website)</p>
                                <Input className="featuredProducts" type="text" placeholder="Product URL" onChange={(event) => this.handleChange(event, 'product_two_url')}></Input>
                        </Col>
                    </Row>

                    <hr/>

                    <Row>
                        <Col>
                            <h5>Product 3 </h5>
                            <p>(link to an image of your product)</p>
                                <Input className="featuredProducts" type="text" placeholder="Product Image URL" onChange={(event) => this.handleChange(event, 'product_three_image')}></Input>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h5>Product Type </h5>
                            <p>(from Product Type list above)</p>
                                <Input className="featuredProducts" type="text" placeholder="Product Type " onChange={(event) => this.handleChange(event, 'product_three_type')}></Input>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h5>Product URL</h5>
                            <p> (link to your product on your website)</p>
                                <Input className="featuredProducts" type="text" placeholder="Product URL" onChange={(event) => this.handleChange(event, 'product_three_url')}></Input>
                        </Col>
                    </Row>

                </FormGroup>

            </>
        )
    }
}




export default withRouter(connect(mapStoreToProps)(ProductFeatured));