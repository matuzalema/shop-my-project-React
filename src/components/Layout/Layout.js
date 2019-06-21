import React from "react";

import { Header } from "../Header/Header.js";

import { Footer } from "../Footer/Footer";
import style from "./Layout.scss";

export class Layout extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
