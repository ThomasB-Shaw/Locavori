import React, { useState } from 'react';
import { Label, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";

const StateDropdownPublic = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  // Adds selected state to redux store
  const handleChange = (event) => {
    props.dispatch({type: 'ADD_PUBLIC_STATE', payload: event.target.value});
  }

  return(
    <>
    <Label>State*</Label>
    {/* Conditionally renders selected state or generic 'select' */}
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
    {props.store.maker_registration.public_state ?
    <DropdownToggle caret>
      {props.store.maker_registration.public_state}
    </DropdownToggle>:
    <DropdownToggle caret>
      Select
    </DropdownToggle>
    }
    {/* <Input type="text" placeholder="This will be displayed"></Input> */}
      <DropdownMenu className="dropdown-menu">
        <DropdownItem value="AL" onClick={(event) => handleChange(event)}>Alabama</DropdownItem>
        <DropdownItem value="AK" onClick={(event) => handleChange(event)}>Alaska</DropdownItem>
        <DropdownItem value="AZ" onClick={(event) => handleChange(event)}>Arizona</DropdownItem>
        <DropdownItem value="AR" onClick={(event) => handleChange(event)}>Arkansas</DropdownItem>
        <DropdownItem value="CA" onClick={(event) => handleChange(event)}>California</DropdownItem>
        <DropdownItem value="CO" onClick={(event) => handleChange(event)}>Colorado</DropdownItem>
        <DropdownItem value="CT" onClick={(event) => handleChange(event)}>Connecticut</DropdownItem>
        <DropdownItem value="DE" onClick={(event) => handleChange(event)}>Delaware</DropdownItem>
        <DropdownItem value="DC" onClick={(event) => handleChange(event)}>District Of Columbia</DropdownItem>
        <DropdownItem value="FL" onClick={(event) => handleChange(event)}>Florida</DropdownItem>
        <DropdownItem value="GA" onClick={(event) => handleChange(event)}>Georgia</DropdownItem>
        <DropdownItem value="HI" onClick={(event) => handleChange(event)}>Hawaii</DropdownItem>
        <DropdownItem value="ID" onClick={(event) => handleChange(event)}>Idaho</DropdownItem>
        <DropdownItem value="IL" onClick={(event) => handleChange(event)}>Illinois</DropdownItem>
        <DropdownItem value="IN" onClick={(event) => handleChange(event)}>Indiana</DropdownItem>
        <DropdownItem value="IA" onClick={(event) => handleChange(event)}>Iowa</DropdownItem>
        <DropdownItem value="KS" onClick={(event) => handleChange(event)}>Kansas</DropdownItem>
        <DropdownItem value="KY" onClick={(event) => handleChange(event)}>Kentucky</DropdownItem>
        <DropdownItem value="LA" onClick={(event) => handleChange(event)}>Louisiana</DropdownItem>
        <DropdownItem value="ME" onClick={(event) => handleChange(event)}>Maine</DropdownItem>
        <DropdownItem value="MD" onClick={(event) => handleChange(event)}>Maryland</DropdownItem>
        <DropdownItem value="MA" onClick={(event) => handleChange(event)}>Massachusetts</DropdownItem>
        <DropdownItem value="MI" onClick={(event) => handleChange(event)}>Michigan</DropdownItem>
        <DropdownItem value="MN" onClick={(event) => handleChange(event)}>Minnesota</DropdownItem>
        <DropdownItem value="MS" onClick={(event) => handleChange(event)}>Mississippi</DropdownItem>
        <DropdownItem value="MO" onClick={(event) => handleChange(event)}>Missouri</DropdownItem>
        <DropdownItem value="MT" onClick={(event) => handleChange(event)}>Montana</DropdownItem>
        <DropdownItem value="NE" onClick={(event) => handleChange(event)}>Nebraska</DropdownItem>
        <DropdownItem value="NV" onClick={(event) => handleChange(event)}>Nevada</DropdownItem>
        <DropdownItem value="NH" onClick={(event) => handleChange(event)}>New Hampshire</DropdownItem>
        <DropdownItem value="NJ" onClick={(event) => handleChange(event)}>New Jersey</DropdownItem>
        <DropdownItem value="NM" onClick={(event) => handleChange(event)}>New Mexico</DropdownItem>
        <DropdownItem value="NY" onClick={(event) => handleChange(event)}>New York</DropdownItem>
        <DropdownItem value="NC" onClick={(event) => handleChange(event)}>North Carolina</DropdownItem>
        <DropdownItem value="ND" onClick={(event) => handleChange(event)}>North Dakota</DropdownItem>
        <DropdownItem value="OH" onClick={(event) => handleChange(event)}>Ohio</DropdownItem>
        <DropdownItem value="OK" onClick={(event) => handleChange(event)}>Oklahoma</DropdownItem>
        <DropdownItem value="OR" onClick={(event) => handleChange(event)}>Oregon</DropdownItem>
        <DropdownItem value="PA" onClick={(event) => handleChange(event)}>Pennsylvania</DropdownItem>
        <DropdownItem value="RI" onClick={(event) => handleChange(event)}>Rhode Island</DropdownItem>
        <DropdownItem value="SC" onClick={(event) => handleChange(event)}>South Carolina</DropdownItem>
        <DropdownItem value="SD" onClick={(event) => handleChange(event)}>South Dakota</DropdownItem>
        <DropdownItem value="TN" onClick={(event) => handleChange(event)}>Tennessee</DropdownItem>
        <DropdownItem value="TX" onClick={(event) => handleChange(event)}>Texas</DropdownItem>
        <DropdownItem value="UT" onClick={(event) => handleChange(event)}>Utah</DropdownItem>
        <DropdownItem value="VT" onClick={(event) => handleChange(event)}>Vermont</DropdownItem>
        <DropdownItem value="VA" onClick={(event) => handleChange(event)}>Virginia</DropdownItem>
        <DropdownItem value="WA" onClick={(event) => handleChange(event)}>Washington</DropdownItem>
        <DropdownItem value="WV" onClick={(event) => handleChange(event)}>West Virginia</DropdownItem>
        <DropdownItem value="WI" onClick={(event) => handleChange(event)}>Wisconsin</DropdownItem>
        <DropdownItem value="WY" onClick={(event) => handleChange(event)}>Wyoming</DropdownItem>
      </DropdownMenu>
      </Dropdown>
      </>
  )

}


  export default withRouter(connect(mapStoreToProps)(StateDropdownPublic));