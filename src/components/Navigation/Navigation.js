import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";
import {NavLink} from "react-router-dom";

const Navigation = props => (
  
    <div className="top">
      <nav className="topNav">
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink exact to="/FAQ" activeClassName="active">FAQ</NavLink>
        <NavLink exact to="/Rules" activeClassName="active">Rules</NavLink>
        <NavLink exact to="/Contact" activeClassName="active">Contact</NavLink>
        <div className="cart-wrapper">
        <NavLink exact to="/Cart" activeClassName="active"><i className="material-icons">shopping_cart</i></NavLink>
        <p className="cart-quantity">{props.cartProductsQuantity}</p>
        </div>
      </nav>
    </div>

);

export default Navigation;