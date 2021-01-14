import React, { useState } from 'react';
import { Collapse, CardBody, Card, Input, Label, Col } from 'reactstrap';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";

const ProductTypePrepared = (props) => {
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
            props.dispatch({type: 'ADD_PREPARED_TYPE', payload: event.target.id});
        } else {
            props.dispatch({type: 'REMOVE_PREPARED_TYPE', payload: event.target.id});
        }
      }

  return (
    <div className="productType">
      <Input type="radio" name="prepared" id="yes" onChange={(event) => toggle(event)} >Toggle</Input>
        <Label>Yes</Label>
            <Collapse isOpen={isOpen}>
                <Card>

                    <CardBody>
                        <Col >
                        <p>select all that apply</p>
                        <Label check>
                            <Input type="checkbox" id="jams" onClick={(event) => handleChange(event)}/>
                            Jams, Jellies, Spreadables
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="pickles" onClick={(event) => handleChange(event)}/>
                            Pickles, Relish
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="vinegars" onClick={(event) => handleChange(event)}/>
                            Vinegars
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="cookies" onClick={(event) => handleChange(event)}/>
                            Cookies
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="crackers" onClick={(event) => handleChange(event)}/>
                            Crackers
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="chips" onClick={(event) => handleChange(event)}/>
                            Chips
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="syrups" onClick={(event) => handleChange(event)}/>
                            Syrups
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="honey" onClick={(event) => handleChange(event)}/>
                            Honey
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="pancake_mix" onClick={(event) => handleChange(event)}/>
                            Pancake Mix
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="baking_mix" onClick={(event) => handleChange(event)}/>
                            Baking Mix
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="cooking_sauce" onClick={(event) => handleChange(event)}/>
                            Cooking Sauce
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="hot_sauce" onClick={(event) => handleChange(event)}/>
                            Hot Sauces
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="salsa" onClick={(event) => handleChange(event)}/>
                            Salsa
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="hard_candy" onClick={(event) => handleChange(event)}/>
                            Hard Candy/Sweets
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="popcorn" onClick={(event) => handleChange(event)}/>
                            Popcorn
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="chocolate" onClick={(event) => handleChange(event)}/>
                            Chocolate
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="soft_candy" onClick={(event) => handleChange(event)}/>
                            Soft or Chewy Candy/Sweets
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="nuts" onClick={(event) => handleChange(event)}/>
                            Nuts
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="other_snacks" onClick={(event) => handleChange(event)}/>
                            Other Snacks
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="dried_food" onClick={(event) => handleChange(event)}/>
                            Dried Food
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="granola" onClick={(event) => handleChange(event)}/>
                            Granola
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="soups" onClick={(event) => handleChange(event)}/>
                            Soups (fresh or mix)
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="catsup" onClick={(event) => handleChange(event)}/>
                            Catsup
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="mustard" onClick={(event) => handleChange(event)}/>
                            Mustard
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="sweet_treat" onClick={(event) => handleChange(event)}/>
                            Sweet Treat
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="rub" onClick={(event) => handleChange(event)}/>
                            Rub
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="marinade" onClick={(event) => handleChange(event)}/>
                            Marinade
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="dried_vegetable" onClick={(event) => handleChange(event)}/>
                            Dried Vegetable
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="other_sauce" onClick={(event) => handleChange(event)}/>
                            Other Sauce
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="dried_meat" onClick={(event) => handleChange(event)}/>
                            Dried Meat or Jerky
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="preserved_meat" onClick={(event) => handleChange(event)}/>
                            Preserved, shelf-stable meat
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="bakery" onClick={(event) => handleChange(event)}/>
                            Bakery: fresh bread/pastries
                        </Label>
                        <br/>
                        <Label check>
                            <Input type="checkbox" id="other" onClick={(event) => handleChange(event)}/>
                            Other
                        </Label>
                        <br/>
                        </Col> 
                    </CardBody>
                    
                </Card>
            </Collapse>
            <br/>
        <Input  type="radio" name="prepared" id="no" onChange={(event) => toggle(event)} >Toggle</Input>
            <Label >No</Label>   
            
    </div>
  );
}

export default withRouter(connect(mapStoreToProps)(ProductTypePrepared));