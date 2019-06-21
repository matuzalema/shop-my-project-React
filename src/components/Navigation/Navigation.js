import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.scss";
import {NavLink} from "react-router-dom";

export const Navigation = props => {
  return (
    <div className="top">
      <nav className="topNav">
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink exact to="/FAQ" activeClassName="active">FAQ</NavLink>
        <NavLink exact to="/Rules" activeClassName="active">Rules</NavLink>
        <NavLink exact to="/Contact" activeClassName="active">Contact</NavLink>
        <NavLink exact to="/Cart" activeClassName="active">Cart</NavLink>
      </nav>
    </div>
  );
};