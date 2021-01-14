import React, { useState } from 'react';
import { Collapse, CardBody, Card, Input, Label } from 'reactstrap';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";

const ProductTypeBeverage = (props) => {
  const [isOpen, setIsOpen] = useState(false);

// Toggles dropdown menu, clears checkboxes and redux store on collapse
  const toggle = (event) => {
    if (event.target.id === 'yes'){
      setIsOpen(!isOpen)
    } else if (event.target.id === 'no' && isOpen) {
      setIsOpen(!isOpen)
      document.querySelectorAll('input[type=checkbox]').forEach( el => el.checked = false );
      props.dispatch({type: 'CLEAR_PREPARED_TYPE'})
    }
  };

    // If checkbox is checked after click, id is sent to the redux store
    // The id is removed from the redux store if the checkbox is unchecked after click
  const handleChange = (event) => {
    if (document.getElementById(event.target.id).checked) {
        props.dispatch({type: 'ADD_BEVERAGE_TYPE', payload: event.target.id});
    } else {
        props.dispatch({type: 'REMOVE_BEVERAGE_TYPE', payload: event.target.id});
    }
  }

  return (
    <div className="productType">
      <Input type="radio" name="beverage" id="yes" onChange={(event) => toggle(event)} >Toggle</Input>
        <Label>Yes</Label>
            <Collapse isOpen={isOpen}>
                <Card>

                    <CardBody>
                        <p>select all that apply</p>
                        <Label check >
                            <Input type="checkbox" id="schrubs_switchel" onClick={(event) => handleChange(event)}/>
                            Schrubs or Switchel
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="soda" onClick={(event) => handleChange(event)}/>
                            Soda Pop (rootbeer, sassparilla, etc)
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="coffee" onClick={(event) => handleChange(event)}/>
                            Coffee
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="hot_drink" onClick={(event) => handleChange(event)}/>
                            Hot Cocoa or Hot Drink Mix
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="tea" onClick={(event) => handleChange(event)}/>
                            Tea
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="health_shot" onClick={(event) => handleChange(event)}/>
                            Health or Energy Shot
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="sweet_treat" onClick={(event) => handleChange(event)}/>
                            Sweet Treat
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="cocktail_mixer" onClick={(event) => handleChange(event)}/>
                            Cocktail or bar mixer
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="spirits" onClick={(event) => handleChange(event)}/>
                            Spirits
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="beer" onClick={(event) => handleChange(event)}/>
                            Beer
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="cider" onClick={(event) => handleChange(event)}/>
                            Hard Cider
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="wine" onClick={(event) => handleChange(event)}/>
                            Wine
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="fresh_fruit" onClick={(event) => handleChange(event)}/>
                            Fresh Fruit
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="nonalcoholic" onClick={(event) => handleChange(event)}/>
                            Non-Alcoholic Beverage 
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="dairy" onClick={(event) => handleChange(event)}/>
                            Dairy
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="other" onClick={(event) => handleChange(event)}/>
                            Other
                        </Label>
                        <br/>
                    </CardBody>
                    
                </Card>
            </Collapse>
            <br/>
        <Input type="radio" name="beverage" id="no" onChange={(event) => toggle(event)} >Toggle</Input>
            <Label>No</Label>
    </div>
  );
}

export default withRouter(connect(mapStoreToProps)(ProductTypeBeverage));