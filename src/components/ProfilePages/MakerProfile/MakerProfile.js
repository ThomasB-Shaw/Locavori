import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardSubtitle, CardText, Container, Button, Row, Col } from 'reactstrap';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import DesktopNav from '../../Navbars/DesktopNav';
import './MakerProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const facebook = <FontAwesomeIcon icon={faFacebookSquare}/>
const instagram = <FontAwesomeIcon icon={faInstagramSquare}/>




class MakerProfilePage extends React.Component {



  componentDidMount() {
    this.getMaker();
  }

  getMaker = () => {
    this.props.dispatch({ type: 'GET_MAKER_CARD',payload:this.props.match.params })
  }




  render() {
    return (
      <>
      <DesktopNav/>
      <Container>
        {this.props.store.makerCard.map((maker) => {
           return (
        <>
        {maker.approved_maker || this.props.store.user.admin ?

          <Card  key={maker.id}>
            <CardBody className="MakerProfileCard">
              <Row >
                <Col xs="6">
                  <img className="logo" src={maker.logo} width='350' alt="" />
                </Col>

                <Col xs="6">
                  <CardHeader className="MakerProfileHeader" tag="h2">{maker.business_name}</CardHeader>
              
                  <CardText className="MakerContact">
                    Located in: <br/>
                    {maker.business_city},{maker.business_state}
                  </CardText>

                  <CardText className="MakerContact">
                    Business Phone: <br/>
                    {maker.phone_one}
                  </CardText>

                  <CardText className="MakerContact">
                    Email: <br/>
                    {maker.email_contact}
                  </CardText>
 
             
                  {/* facebook, instagram, and "like" icons go here */}

                  <Row>
                    <Col>
                    <Button className="WebsiteLink" href={maker.website}>visit website</Button>

                    <a href={maker.facebook}>
                      <p className="SocialIcon">{facebook}</p>
                    </a>
            
                    <a href={maker.facebook}>
                      <p className="SocialIcon">{instagram}</p>
                    </a>
                    </Col>
                  </Row>
                
                </Col>
              </Row>

              <Row className="MeetTheMaker">
                <Col xs="8">
                  <CardSubtitle className="MakerTitle" tag="h4">Meet {maker.first_name} from {maker.business_name}</CardSubtitle>
                  <CardText>{maker.story}</CardText>

                  <CardSubtitle>Known for:</CardSubtitle>
                  <CardText>{maker.product_unique}</CardText>

                  <CardSubtitle>Awards:</CardSubtitle>
                  <CardText>{maker.awards}</CardText>
                </Col>
                
                <Col xs="4">
                <img className="MakerImage" src={maker.owner_img} alt="maker-img" />
                </Col>
              </Row>

              <h2>Featured Products</h2>
              <Row className="FeaturedProducts">

                {maker.product_img_one && (
                  <Col>
                    <a className="ProductTitle" href={maker.product_url_one}>
                      <h4>{maker.product_type_one}</h4>
                    </a> 

                    <a href={maker.product_url_one}>
                      <img className="FeaturedProductImg" src={maker.product_img_one} alt="product 1"/>
                    </a>
                  </Col>
                )}

                {maker.product_img_two && (
                  <Col>
                    <a className="ProductTitle" href={maker.product_url_two}>
                      <h4>{maker.product_type_two}</h4>
                    </a>

                    <a href={maker.product_url_two}>
                      <img  className="FeaturedProductImg" src={maker.product_img_two} width='250' alt="" align="center"/>
                    </a>
                  </Col>
                )}
                
                {maker.product_img_three && (
                  <Col>
                    <a className="ProductTitle" href={maker.product_url_three}>
                      <h4>{maker.product_type_three}</h4>
                    </a>

                    <a href={maker.product_url_three}>
                      <img  className="FeaturedProductImg" src={maker.product_img_three} width='250' alt="" align="center"/>
                    </a>
                  </Col>
                )}
                
              </Row>
            </CardBody>
          </Card>
          :
          <></>
          }
        </>
        )
        })}

      </Container>

        </>
    )
  }
}
export default connect(mapStoreToProps)(MakerProfilePage);
