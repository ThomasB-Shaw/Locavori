import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import { Tooltip, Button } from 'reactstrap';

const MakerToolTip = (props) => {

  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <Button
        id="makerBtn"
        className="registerOptionsButton"
        onClick={() => props.history.push('/maker-registration1')}>
          Register as a Maker
        </Button>

      <Tooltip placement="bottom" isOpen={tooltipOpen} target="makerBtn" toggle={toggle}>
        As a maker, you can promote and display your products to the Locavori community.
      </Tooltip>
    </div>
  );
}

export default withRouter(connect(mapStoreToProps)(MakerToolTip));