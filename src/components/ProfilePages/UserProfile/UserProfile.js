import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import DesktopNav from '../../Navbars/DesktopNav';
import './UserProfile.css';
import MakerCard from '../../MakerCard/MakerCard';
import { Container, Jumbotron } from 'reactstrap';


class UserProfilePage extends React.Component {

  componentDidMount = () => {
    this.props.dispatch({type: 'GET_FAVORITES'});
    this.props.dispatch({ type: 'GET_SPECIFIC_FAVORITES' }); 
  }
  render() {
    return (
      <>
      <DesktopNav/>
      <div className="profileBody">
        
        <Jumbotron>
          <Container>
            <h1>Hello, {this.props.store.user.first_name}</h1>
            <h6>({this.props.store.user.email})</h6>
          </Container>
        </Jumbotron>

        <Container>

        <h2>My Favorites</h2>
        <hr/>
        
        <div className="favoritesContainer">
          {/* Loop through favorites table  here*/}
          {this.props.store.favorites.map((favorites) => {
            return(
              <MakerCard maker={favorites} key={favorites.id}/>
            )
          })}
        </div>

      </Container>
    </div>
    </>
    )
  }
}

export default connect(mapStoreToProps)(UserProfilePage);

