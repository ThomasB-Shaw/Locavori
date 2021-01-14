import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Collapse, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const upArrow = <FontAwesomeIcon icon={faChevronUp}/>
const downArrow = <FontAwesomeIcon icon={faChevronDown}/>

const ProductOptions = (props) => {
  const [isOpen, setIsOpen] = useState(false);

//   Sets up arrays of all values of product types submitted through the form
  const [fresh_food_array] = useState(['beef','chicken','lamb','bison','pork','eggs','cheese','herbs','apples','blueberries','strawberries','fresh_vegetables','fresh_fruit','milk','cream','flowers']);
  const [prepared_food_array] = useState(['jams','pickles','vinegars','cookies','crackers','chips','syrups','honey','pancake_mix','baking_mix','cooking_sauce','hot_sauce','salsa','hard_candy','popcorn','chocolate','soft_candy','nuts','other_snacks','dried_food','granola','soups','catsup','mustard','sweet_treat','rub','dried_vegetable','marinade','other_sauce','dried_meat','preserved_meat','bakery']);
  const [beverages_array] = useState(['schrubs_switchel', 'soda', 'coffee', 'hot_drink', 'tea', 'health_shot', 'cocktail_mixer', 'spirits', 'beer', 'cider', 'wine', 'nonalcoholic', 'dairy']);

  const toggle = () => setIsOpen(!isOpen);

  const handleChange = (event) => {

    // If checkbox is checked after click, id is sent to the redux store
    // The id is removed from the redux store if the checkbox is unchecked after click
    // Checks based on which type of product is selected
    if(event.target.id === 'fresh'){
        if (document.getElementById(event.target.id).checked) {
            props.dispatch({type: 'ADD_FRESH_OPTIONS', payload: fresh_food_array});
        } else {
            props.dispatch({type: 'REMOVE_FRESH_OPTIONS', payload: fresh_food_array});
        }
    }
    
    else if(event.target.id === 'prepared'){
        if (document.getElementById(event.target.id).checked) {
            props.dispatch({type: 'ADD_PREPARED_OPTIONS', payload: prepared_food_array});
        } else {
            props.dispatch({type: 'REMOVE_PREPARED_OPTIONS', payload: prepared_food_array});
        }
    }
    
    else if(event.target.id === 'beverages'){
        if (document.getElementById(event.target.id).checked) {
            props.dispatch({type: 'ADD_BEVERAGE_OPTIONS', payload: beverages_array});
        } else {
            props.dispatch({type: 'REMOVE_BEVERAGE_OPTIONS', payload: beverages_array});
        }
    }
  }

  return (
    <div>
        <Button
            className="filterBtn"
            onClick={toggle}
            style={{ marginBottom: '1rem' }}>
                Product Types {isOpen ? <span className="dots">{upArrow}</span> : <span className="dots">{downArrow}</span>}
        </Button>

        <Collapse isOpen={isOpen} className="collapseContainer">
            <Form>

                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="fresh" onClick={(event) => handleChange(event)}/>{' '}
                            Fresh Food
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="prepared" onClick={(event) => handleChange(event)}/>{' '}
                            Prepared/Packaged Food
                    </Label>
                </FormGroup>
                
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="beverages" onClick={(event) => handleChange(event)}/>{' '}
                            Beverages
                    </Label>
                </FormGroup>

            </Form>
        </Collapse>
    </div>
  );
}

export default connect(mapStoreToProps)(ProductOptions);