import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../MakerRegisterForm.css';

const SubmitModal = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const submit = () => {
    props.dispatch({type: 'PUT_SUBMIT', payload: props.store.maker_registration});
    toggle();
    props.history.push('/home');
  }

  return (
    <div>
      <Button onClick={toggle} className="modalBtns">Submit Application</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="modalHeader">Application submitted for review</ModalHeader>
        <ModalBody>
            Your application has been successfully submitted and is pending review!
        </ModalBody>
        <ModalFooter className="modalFooter">
          <Button color="primary" onClick={submit} className="modalBtns">Ok</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default withRouter(connect(mapStoreToProps)(SubmitModal));