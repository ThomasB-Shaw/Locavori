import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../../../../redux/mapStoreToProps';
import { Tooltip, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const thumbsUp = <FontAwesomeIcon icon={faThumbsUp}/>

const AcceptToolTip = (props) => {

  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  const approveMaker = (makerId) => {
    props.dispatch({ type: "APPROVE_MAKER", payload: makerId })
  }

  return (
      <div>
        <Button
          id="acceptBtn"
          className="acceptBtn"
          onClick={()=> approveMaker(props.makerId)}
        >
           {thumbsUp}
        </Button>

        <Tooltip placement="bottom" isOpen={tooltipOpen} target="acceptBtn" toggle={toggle}>
            Accept
        </Tooltip>
      </div>
  );
}

export default withRouter(connect(mapStoreToProps)(AcceptToolTip));