import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../../components/Navigation.js"
import styles from "./Header.scss";

export const Header = props => {
  return (
    <div className="top">
      <h1>Shop name</h1>
      <Navigation />
    </div>
  );
};