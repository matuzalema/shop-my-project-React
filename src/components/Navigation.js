import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.scss";

export const Navigation = props => {
  return (
    <div class="top">
      <h1>Shop name</h1>
      <nav className="topNav">
        <Link to="/">Home</Link>
        <Link to="FAQ">FAQ</Link>
        <Link to="Rules">Rules</Link>
        <Link to="Contact">Contact</Link>
      </nav>
    </div>
  );
};