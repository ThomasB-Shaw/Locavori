import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../../../../redux/mapStoreToProps';
import { Tooltip, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'

const thumbsDown = <FontAwesomeIcon icon={faThumbsDown} />

const DeclineToolTip = (props) => {

  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  //sends maker Id to delete saga to deny maker in application
  const denyMaker = (makerId) => {
    props.dispatch({ type: "DENY_MAKER", payload: makerId })
  }

  return (
    <div>
      <Button
        id="declineBtn"
        className="declineBtn"
        onClick={() => denyMaker(props.makerId)}
      >
        {thumbsDown}
      </Button>

      <Tooltip placement="bottom" isOpen={tooltipOpen} target="declineBtn" toggle={toggle}>
        Decline
        </Tooltip>
    </div>
  );
}

export default withRouter(connect(mapStoreToProps)(DeclineToolTip));