import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";
import {Link} from "react-router-dom";

const Header = () => (
  <div className="top">
    <Link exact to={"/home"} className="logo-link">
    <div className="logo">
      <div className="logo-wrapper">
        <h1 className="logo-header">Ph&nbsp;&nbsp;&nbsp;</h1>
        <i className="material-icons logo-icon">
          photo_camera
        </i><h1 className="logo-header">to</h1>
      </div>
      <h1 className="logo-header-second">inventions</h1>
    </div>
    </Link>
    <Navigation />
  </div>
);

export default Header;
