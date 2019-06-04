import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../../components/Navigation.js"
import styles from "./Header.scss";
import "./nav.scss";

export const Header = props => {
  return (
    <div class="top">
      <h1>Shop name</h1>
      <Navigation />
    </div>
  );
};