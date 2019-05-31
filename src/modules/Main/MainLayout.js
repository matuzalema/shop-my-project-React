import React from "react";

import { Navigation } from "../../components/Navigation.js";
import { Footer } from "../../components/Footer.js";
import style from "./Main.css";

export class MainLayout extends React.Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}