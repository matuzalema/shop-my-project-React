import React from "react";

import Header  from "../Header/Header.js";
import { connect } from "react-redux";

import { Footer } from "../Footer/Footer";
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
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
      <div className="container-fluid">
        <div className='top-nav'>
          <p className="top-nav-item">
            <Link exact to={"/log"} >
              <i className="material-icons top-nav-icon">perm_identity</i>
              Zaloguj się
            </Link>
          </p>
          <p className="top-nav-item">
            <Link exact to={"/newsletter"}>
            <i className="material-icons top-nav-icon"> mail_outline </i>
              Newsletter
            </Link>
          </p>
          <p className="top-nav-item">
            <Link exact to={"/feedback"}>
            <i className="material-icons top-nav-icon">contact_mail</i>
              Feedback 
            </Link>
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

// function matchDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { addToCart: addToCart }, dispatch
//   )
// }

export default connect(
  mapStateToProps
)(Layout);