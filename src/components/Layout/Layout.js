import React from "react";

import Header  from "../Header/Header.js";
import { connect } from "react-redux";

import { Footer } from "../Footer/Footer";
import { addToCart } from "../../actions/cartActions";
import { bindActionCreators } from 'redux';
import "./Layout.scss";

class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cartProductsQuantity: props.cartProductsQuantity
    }
  }
  
  render() {
    return (
      <div className="container">
        <Header cartProductsQuantity={this.props.cartProductsQuantity}/>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartProductsQuantity: state.cartContent.cartProductsQuantity
});

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { addToCart: addToCart }, dispatch
  )
}

export default connect(
  mapStateToProps, matchDispatchToProps
)(Layout);