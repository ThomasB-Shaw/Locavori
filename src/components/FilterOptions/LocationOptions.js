import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Collapse, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const upArrow = <FontAwesomeIcon icon={faChevronUp}/>
const downArrow = <FontAwesomeIcon icon={faChevronDown}/>

const LocationOptions = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    // If checkbox is checked after click, id is sent to the redux store
    // The id is removed from the redux store if the checkbox is unchecked after click
  const handleChange = (event) => {
    if (document.getElementById(event.target.id).checked) {
        props.dispatch({type: 'ADD_LOCATION', payload: event.target.id});
    } else {
        props.dispatch({type: 'REMOVE_LOCATION', payload: event.target.id});
    }
  }

  return (
    <div>
        <Button
            className="filterBtn"
            onClick={toggle}
            style={{ marginBottom: '1rem' }}>
                Location Options {isOpen ? <span className="dots">{upArrow}</span> : <span className="dots">{downArrow}</span>}
        </Button>

        <Collapse isOpen={isOpen} className="collapseContainer">
            <Form>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="grocery" onClick={(event) => handleChange(event)} />{' '}
                            Local Grocery Stores
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="co_ops" onClick={(event) => handleChange(event)} />{' '}
                            Co-ops
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="farmers_market" onClick={(event) => handleChange(event)} />{' '}
                            Farmers Markets/Other Local Markets
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="amazon" onClick={(event) => handleChange(event)} />{' '}
                        Online on Amazon
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="company_website" onClick={(event) => handleChange(event)} />{' '}
                        Online on Company Website
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="gift" onClick={(event) => handleChange(event)} />{' '}
                        Gift/Subscription Box
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="retail" onClick={(event) => handleChange(event)} />{' '}
                        Retail Store (Non-Grocery)
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="your_home" onClick={(event) => handleChange(event)} />{' '}
                        Private Place of Business, Farm, or Home
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="roadside" onClick={(event) => handleChange(event)} />{' '}
                        Roadside Stand
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="other" onClick={(event) => handleChange(event)} />{' '}
                        Other
                    </Label>
                </FormGroup>

            </Form>
        </Collapse>
    </div>
  );
}

export default connect(mapStoreToProps)(LocationOptions);