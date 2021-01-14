import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import './AdminParTab.css';
import AcceptBtn from './AdminPARToolTips/ApproveToolTip';
import DeclineBtn from './AdminPARToolTips/DeclineToolTip';
import { Card, CardBody, CardTitle, CardSubtitle, CardHeader, CardText, Container, Button, Row, Col, CardFooter } from 'reactstrap';



class AdminPARTab extends Component {
  //gets and runs getMaker on page load
  componentDidMount() {
    this.getMaker();
  }

  getMaker = () => {
    this.props.dispatch({ type: 'GET_MAKERS' })
  }
  //takes in makerID and when view Profile is clicked and sends id to MakerProfile
  ViewProfile = (makerId) => {
    this.props.history.push(`/makerCard/${makerId}`);
  }
  //takes in MakerId from onlcick  of approvetooltip (in approvetooltip.js) btn
  // then dispatches makerId to approve maker listener saga in delete.maker.saga
  approveMaker = (makerId) => {
    this.props.dispatch({ type: "APPROVE_MAKER", payload: makerId })
  }
  //takes in MakerId from onlcick  of Denytooltip (in denytooltip.js) btn
  // then dispatches makerId to Deny maker listener saga in delete.maker.saga
  denyMaker = (makerId) => {
    this.props.dispatch({ type: "DENY_MAKER", payload: makerId })
  }

  render() {
    return (
      <>

      <h1>Pending Requests</h1>
          <div className="PendingRequestsBody">
             <Container>
               <Row>
            {this.props.store.maker.map((maker) => {
              return (
                <> 
                  {/* conditional that looks at maker.pending_maker to show all .pending_makers 
                   to the Admin */}
                  {maker.pending_maker ?

                    <Col xs="12" md="6" xl="4">
                      <Card key={maker.id} className="adminCards">

                        <CardHeader className="cardHeader">
                          <CardTitle tag="h5">{maker.business_name}</CardTitle>
                          <CardSubtitle tag="h6" className="mb-2">{maker.product_type_one}</CardSubtitle>
                        </CardHeader>

                        <img className="adminMakerImg" src={maker.owner_img} alt={maker.business_name}/>

                        <CardBody>
                          <Row>
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
                          </Row>
                        </CardBody>
                          <CardFooter className="cardFooter">
                          <Row>
                            <Col xs="6">
                              <Button className="viewProfileBtn" onClick={() => this.ViewProfile(maker.profile_id)}> 
                                View Page
                              </Button>
                            </Col>

                            <Col xs="3">
                            <AcceptBtn className="acceptBtn" makerId={maker.profile_id} />
                            </Col>
                            <Col xs="3">
                            <DeclineBtn className="declineBtn" makerId={maker.profile_id}/>
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

export default withRouter(connect(mapStoreToProps)(AdminPARTab));