import React, {useState} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import '../MakerCard/MakerCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const heart = <FontAwesomeIcon icon={faHeart} />

let favStatus;

const FavoriteBtn = (props) => {
     
    const favoriteChecker = (makerId, fav) => {
        
        const favbtn = fav;
        const result = favbtn.filter(function (favorite) {
            return favorite.maker_id === makerId;         
        });
        if(result.length){
            favStatus = true;
        }else{
            favStatus = false;
            favoriteMaker(makerId)
        }
    }
    const favoriteMaker = (makerId) => {
        props.dispatch({ type: 'POST_FAVORITE', payload: makerId });
        toggle();
    }

    const login = () => {
        props.history.push('/login');
        toggle();
    }

    const register = () => {
        props.history.push('/register-options');
        toggle();
    }

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
<>
    {props.store.user.id ?

    <div>
      <Button className="favoriteBtn" onClick={() => favoriteChecker(props.maker.id, props.fav)}>{heart}</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="modalHeader">Add {props.maker.business_name} to your favorites</ModalHeader>
        <ModalBody>
            {favStatus === true ?
           <p>Already a favorite</p>
        :
           <p> {props.maker.business_name} was successfully added to your favorites!</p>
        }       
        </ModalBody>
        <ModalFooter className="modalFooter">
          <Button className="modalBtns" onClick={toggle}>OK!</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
    :
    <div>
      <Button color="danger" className="favoriteBtn" onClick={toggle}>{heart}</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="modalHeader">Want to add "{props.maker.business_name}" to your favorites?</ModalHeader>
        <ModalBody>
            Login or create an account to save your favorite makers!
        </ModalBody>
        <ModalFooter className="modalFooter">
          <Button className="modalBtns" onClick={() => login()}>Login</Button>{' '}
          <Button className="modalBtns" onClick={() => register()}>Register</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>

    }
</>
  );
}


export default withRouter(connect(mapStoreToProps)(FavoriteBtn));