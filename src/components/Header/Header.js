import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";
import { connect } from "react-redux";
import {addToCart} from "../../actions/cartActions";

const Header = props => (
  <div className="top">
    <h1>Shop name</h1>
    <Navigation cartProductsQuantity={props.cartProductsQuantity} />
  </div>

);

export default Header;
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cartProductsQuantity: props.cartProductsQuantity
//     };
//   }
//   render(){
    // return(
    //   <div className="top">
    //     <h1>Shop name</h1>
    //     <Navigation cartProductsQuantity={this.props.cartProductsQuantity}/>
    //   </div>
//     )
//   }
// }

// const mapStateToProps = state => ({
//   cartProductsQuantity: state.cartContent.cartProductsQuantity
// })

// const mapDispatchToProps = {
//   addToCart
 
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Header);