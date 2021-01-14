import React, {useState} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../HomePage/MakerCard/MakerCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const heart = <FontAwesomeIcon icon={faHeart} />

const RemoveFavoriteBtn = (props) => {

  const removeFavorite = (makerId) => {
    // console.log("Favorite removed! ID:", makerId);
    props.dispatch({type: 'DELETE_FAVORITE', payload: makerId});
  }

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="favoriteBtn" onClick={() => removeFavorite(props.maker.id)}>REMOVE FAVORITE</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="favModalHeader">Add {props.maker.business_name} to your favorites</ModalHeader>
        <ModalBody>
          FAVORITE REMOVED    
        </ModalBody>
        <ModalFooter className="favModalFooter">
          <Button className="modalBtns" onClick={toggle}>OK!</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}


export default withRouter(connect(mapStoreToProps)(RemoveFavoriteBtn));