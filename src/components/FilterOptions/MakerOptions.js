import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Collapse, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const upArrow = <FontAwesomeIcon icon={faChevronUp}/>
const downArrow = <FontAwesomeIcon icon={faChevronDown}/>

const MakerOptions = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    // If checkbox is checked after click, id is sent to the redux store
    // The id is removed from the redux store if the checkbox is unchecked after click
  const handleChange = (event) => {
    if (document.getElementById(event.target.id).checked) {
        props.dispatch({type: 'ADD_MAKER_OPTIONS', payload: event.target.id});
    } else {
        props.dispatch({type: 'REMOVE_MAKER_OPTIONS', payload: event.target.id});
    }
  }

  return (
    <div>
        <Button
            className="filterBtn"
            onClick={toggle}
            style={{ marginBottom: '1rem' }}>
                Maker Types {isOpen ? <span className="dots">{upArrow}</span> : <span className="dots">{downArrow}</span>}
        </Button>

        <Collapse isOpen={isOpen} className="collapseContainer">
            <Form>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="farmer" onClick={(event) => handleChange(event)} />{' '}
                            Farmer/Grower
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="forager" onClick={(event) => handleChange(event)} />{' '}
                            Forager
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="maker" onClick={(event) => handleChange(event)} />{' '}
                            Maker
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="distiller" onClick={(event) => handleChange(event)} />{' '}
                            Distiller
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="brewer" onClick={(event) => handleChange(event)} />{' '}
                            Brewer
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="winemaker" onClick={(event) => handleChange(event)} />{' '}
                            Wine Maker
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="cidery" onClick={(event) => handleChange(event)} />{' '}
                            Cidery
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="roaster" onClick={(event) => handleChange(event)} />{' '}
                            Roaster
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="apiary" onClick={(event) => handleChange(event)} />{' '}
                            Apiary (Bees)
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="woman_owned" onClick={(event) => handleChange(event)} />{' '}
                            Woman Owned
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="poc_owned" onClick={(event) => handleChange(event)} />{' '}
                            P.O.C. Owned
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

export default connect(mapStoreToProps)(MakerOptions);