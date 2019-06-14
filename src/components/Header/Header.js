import React from "react";
import { Navigation } from "../Navigation/Navigation";
import styles from "./Header.scss";

export const Header = props => {
  return (
    <div className="top">
      <h1>Shop name</h1>
      <Navigation />
    </div>
  );
};
