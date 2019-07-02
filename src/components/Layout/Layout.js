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
        <div className='top-nav'>
          <p className="top-nav-item">
            <i className="material-icons top-nav-icon">perm_identity</i>
            Zaloguj się
          </p>
          <p className="top-nav-item">
            <i className="material-icons top-nav-icon"> mail_outline </i>
            Newsletter
          </p>
          <p className="top-nav-item">
            <i className="material-icons top-nav-icon">contact_mail</i>
          Feedback
          </p>
        </div>
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