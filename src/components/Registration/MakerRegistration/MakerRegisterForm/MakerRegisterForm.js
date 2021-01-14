import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Form, Row } from 'reactstrap';
import './MakerRegisterForm.css' 
import MakerRegisterTabs from './MakerRegisterTabs/MakerRegisterTabs';
import SubmitModal from './RegisterFormModals/SubmitModal';
import SaveModal from './RegisterFormModals/SaveModal';


class MakerRegisterForm extends Component {
state = {
  initial_maker: {
      availability: "",
      beverage_type: [],
      business_license: [],
      business_specs: {website: "", facebook: "", instagram: "", public_email: "", license_id_state: ""},
      business_state: "",
      business_type: [],
      contact: {alt_phone: "", business_address: "", business_city: "", business_suite_num: "", business_zip_code: "", email: "", first_name: "", last_name: "", legal_business_name: "", phone: "", public_address: "", public_business_name: "", public_city: "", public_suite_num: "", public_zip_code: ""},
      delivery_type: {pick_up: "", delivery: "", shipping: ""},
      featured_products: {product_one_image: "", product_one_type: "", product_one_url: "", product_two_image: "", product_two_type: "", product_two_url: "", product_three_image: "", product_three_type: "", product_three_url: ""},
      fresh_type: [],
      prepared_type: [],
      product_category: [],
      product_distribution: [],
      product_info: {specialties: "", awards: "", unique: ""},
      public_state: "",
      story_info: {profile_image: "", story: "", give_back: "", anything_else: ""}
    }
}

componentDidMount = () => {
  this.props.dispatch({type: 'INITIALIZE_MAKER_STORE', payload: this.state.initial_maker});
}

  //Functionality for SAVE and SUBMIT in modals
  save = () => {
    console.log('maker_registration:', this.props.store.maker_registration);
    // this.props.dispatch({type: 'PUT_MAKER_INFO', payload: this.props.store.maker_registration});
  }

  submitBtn = () => {
    console.log('SubmitBtn Clicked');
    // this.props.dispatch({type: 'PUT_SUBMIT', payload: this.props.store.maker_registration});
  }


  render() {
    return (
      <div>
        <Form>
          <MakerRegisterTabs/>
          <div>
            <Row className="buttonRow">
              <SaveModal saveBtn={this.save} className="modalBtns"/>
              <SubmitModal onClick={this.submitBtn} className="registerFormBtns"/>
            </Row>
          </div>
        </Form>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(MakerRegisterForm));
