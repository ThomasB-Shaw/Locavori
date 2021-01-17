import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle, CardText, CardHeader, Row, Col, Button } from 'reactstrap';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './MakerCard.css';
import FavoriteBtn from '../FavoriteBtn/FavoriteBtn';
import { withRouter } from "react-router";
// import FavoriteBtnRemoval from '../../FavoriteBtn/FavoriteBtnRemoval'; SUCCESSFULLY REMOVES FROM FAVORITES BUT IS HAVING TROUBLE CONDITIONAL RENDERING BUTTON

class MakerCard extends Component {

    ViewProfile = (makerId) => {
        this.props.history.push(`/makerCard/${makerId}`)
    }

    componentDidMount = () => {
        this.props.dispatch({type: 'GET_FAVORITES', payload: this.props.maker.id});
      }

    
    render() {

        return (
                <Card className="makerCard">

{/* Title, product types, favorite Btn */}

                    <CardHeader className="ListViewHeader">
                        <Row>
                            <Col xs="10">
                                <CardTitle tag="h5">
                                    <Button
                                        className="ListViewButton"
                                        size="lg"
                                        onClick= {() => this.ViewProfile(this.props.maker.profile_id)}>
                                            {this.props.maker.business_name}
                                    </Button>
                                    <p className="distance">{this.props.maker.distanceText} away</p>
                                </CardTitle>

                            </Col>

                            <Col xs="2">
                                <FavoriteBtn className="favoriteBtn" maker={this.props.maker} fav={this.props.fav}/>
                            </Col>
                        </Row>
                    </CardHeader>
                        <CardBody>
                            <Row>
                            <Col xs="6" md="4" xl="2">
                                <img
                                    src={this.props.maker.product_img_one}
                                    alt={this.props.maker.story}
                                    className="cardImg"
                                />
                            </Col>
                                
                            <Col xs="6" md="8" xl="2">
                                <CardText tag="h6" className="ListViewSubtitle">
                                    <h4>Products</h4>
                                    <hr className="lightGreenHr"/>
                                    {this.props.maker.product_type_one}
                                    <br/>
                                    <br/>
                                    {this.props.maker.product_type_two}
                                    <br/>
                                    <br/>
                                    {this.props.maker.product_type_three}
                                    <br/>
                                    <br/>
                                </CardText>

                                
                            </Col>
                            
                            <Col xs="12" md="12" xl="8">
                                <div className="aboutContainer">
                                <CardText tag="h6" className="ListViewSubtitle">
                                        <h4>About</h4>
                                        <hr className="lightGreenHr"/>
                                        {this.props.maker.story}
                                </CardText>
                                </div>
                                <Button className="SeeMoreButton" onClick= {() => this.ViewProfile(this.props.maker.profile_id)}>
                                        See more...
                                </Button>
                            </Col>
                            </Row>
                        </CardBody>

                </Card>
        );
    }
}

export default withRouter(connect(mapStoreToProps)(MakerCard));