import React from "react";
import { Link } from "react-router-dom";
import style from "./Navigation.css";

export const Navigation = props => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="FAQ">FAQ</Link>
        <Link to="Rules">Rules</Link>
        <Link to="Contact">Contact</Link>
      </nav>
    </div>
  );
};