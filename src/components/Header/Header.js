import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";
import { connect } from "react-redux";
import {addToCart} from "../../actions/cartActions";

const Header = props => (
  <div className="top">
    <div className="logo">
      <div className="logo-wrapper">
        <h1 className="logo-header">Ph&nbsp;&nbsp;&nbsp;</h1>
        <i className="material-icons logo-icon">
          photo_camera
        </i><h1 className="logo-header">to</h1>
      </div>
      <h1 className="logo-header-second">inventions</h1>
    </div>
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