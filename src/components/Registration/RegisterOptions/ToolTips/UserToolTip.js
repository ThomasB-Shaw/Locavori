import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import { Tooltip, Button } from 'reactstrap';

const UserToolTip = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <Button
        id="userBtn"
        className="registerOptionsButton"
        onClick={() => props.history.push('/user-registration')}>
          Register as a Locavore
        </Button>

      <Tooltip placement="bottom" isOpen={tooltipOpen} target="userBtn" toggle={toggle}>
        As a locavore, you can search for local makers and learn about the products they make.
      </Tooltip>
    </div>
  );
}

export default withRouter(connect(mapStoreToProps)(UserToolTip));