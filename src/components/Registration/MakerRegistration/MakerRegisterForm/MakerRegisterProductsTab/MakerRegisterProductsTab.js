import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import ProductDistro from './ProductDistro/ProductDistro';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductFeatured from './ProductFeatured/ProductFeatured';


class MakerRegisterProductsTab extends Component {

  render() {
    return (
        <>
        <ProductDistro/>
        <ProductInfo/>
        <ProductFeatured/>
        </>
    );
  }
}


export default withRouter(connect(mapStoreToProps)(MakerRegisterProductsTab));