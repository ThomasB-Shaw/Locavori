import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Collapse, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const upArrow = <FontAwesomeIcon icon={faChevronUp}/>
const downArrow = <FontAwesomeIcon icon={faChevronDown}/>

const DietaryRestrictions = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    // If checkbox is checked after click, id is sent to the redux store
    // The id is removed from the redux store if the checkbox is unchecked after click
  const handleChange = (event) => {
    if (document.getElementById(event.target.id).checked) {
        props.dispatch({type: 'ADD_DIET', payload: event.target.id});
    } else {
        props.dispatch({type: 'REMOVE_DIET', payload: event.target.id});
    }
  }

  return (
    <div>
        <Button
            className="filterBtn"
            onClick={toggle}>
                Dietary Restrictions {isOpen ? <span className="dots">{upArrow}</span> : <span className="dots">{downArrow}</span>}
        </Button>

        <Collapse isOpen={isOpen} className="collapseContainer">
            <Form>

                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="healthy" onClick={(event) => handleChange(event)}/>{' '}
                            Healthy
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="gluten_free" onClick={(event) => handleChange(event)}/>{' '}
                            Gluten-Free
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="vegan" onClick={(event) => handleChange(event)}/>{' '}
                            Vegan
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="organic" onClick={(event) => handleChange(event)}/>{' '}
                            Organic
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="non_gmo" onClick={(event) => handleChange(event)}/>{' '}
                            Non-GMO
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="no_trans_fats" onClick={(event) => handleChange(event)}/>{' '}
                            No Trans Fats
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="no_corn_syrup" onClick={(event) => handleChange(event)}/>{' '}
                            No High Fructose Corn Syrup
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="nitrate_free" onClick={(event) => handleChange(event)}/>{' '}
                            Nitrate Free
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="keto" onClick={(event) => handleChange(event)}/>{' '}
                            Keto/Low Carb
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox"  id="nut_free" onClick={(event) => handleChange(event)}/>{' '}
                            Nut Free
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="kosher" onClick={(event) => handleChange(event)}/>{' '}
                            Kosher
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="low_sodium" onClick={(event) => handleChange(event)}/>{' '}
                            Low Sodium
                    </Label>
                </FormGroup>
            </Form>
        </Collapse>
    </div>
  );
}

export default connect(mapStoreToProps)(DietaryRestrictions);