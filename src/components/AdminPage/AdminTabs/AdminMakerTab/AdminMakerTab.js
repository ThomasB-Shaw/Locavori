import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import './AdminMakerTab.css';
import { Card, CardBody, CardTitle, Button, CardSubtitle, CardText, Row, Col, Container, CardFooter, CardHeader } from 'reactstrap';


class Maker extends Component {
  //gets and runs getMaker on page load
  componentDidMount() {
    this.getMaker();
  }

  getMaker = () => {
    this.props.dispatch({ type: 'GET_MAKERS' })

  }
//takes in makerID and when view Profile is clicked it sends id to MakerProfile
  ViewProfile = (makerId) => {
    this.props.history.push(`/makerCard/${makerId}`)

  }
  //takes in makerId and when delete is clicked it then sends makerId to
// then dispatches makerId to delete_maker listener saga in delete.maker.saga
  deleteMaker = (makerId) => {
    this.props.dispatch({ type: "DELETE_MAKER", payload: makerId })
  }
  render() {
    return (
      <>

        <h1>Approved Makers</h1>

        <div className="MakerTabBody">
          <Container>
            <Row>
          {this.props.store.maker.map((maker) => {
            return (
              <>
              {/* conditional that looks at .approved_maker to show admin
              all approved makers */}
                {maker.approved_maker ?

                <Col xs="12" md="6" xl="4">
                  <Card key={maker.id} className="adminCards">

                    <CardHeader className="cardHeader">
                      <CardTitle tag="h5">{maker.business_name}</CardTitle>
                      <CardSubtitle tag="h6" className="mb-2">{maker.product_type_one}</CardSubtitle>
                    </CardHeader>

                    <img className="adminMakerImg" src={maker.owner_img} alt={maker.business_name} />
                    
                    <CardBody>
                      <Col xs="12">
                        <CardText>
                          <h5>Products:</h5>
                          <hr/>
                          {maker.product_type_one}
                          <br/>
                          {maker.product_type_two}
                          <br/>
                          {maker.product_type_three}
                        </CardText>
                      </Col>
                      </CardBody>
                      
                      <CardFooter className="cardFooter">
                        <Row>
                        <Col xs="8">
                          <Button className="viewProfileBtn" onClick={() => this.ViewProfile(maker.profile_id)}>
                              View Profile
                          </Button>
                        </Col>

                        <Col xs="4">
                          <Button className="declineBtn" onClick={() => this.deleteMaker(maker.profile_id)}>
                            Delete
                        </Button>
                        </Col>
                        </Row>
                      </CardFooter>
                    
                  </Card>
                </Col>
                  :
                  null
                  
                }
                
              </>
            )
          })}
            </Row>
          </Container>
        </div>
      </>
    );
  }
}


export default withRouter(connect(mapStoreToProps)(Maker));