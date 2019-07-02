import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { NavLink } from "react-router-dom";

export class Footer extends React.Component {
  render() {
    return (
	    <div className="footer">
			<nav className="bottomNav">
				<NavLink exact to="/" activeClassName="active">Home</NavLink>
				<NavLink exact to="/FAQ" activeClassName="active">FAQ</NavLink>
				<NavLink exact to="/Rules" activeClassName="active">Rules</NavLink>
				<NavLink exact to="/Contact" activeClassName="active">Contact</NavLink>	
			</nav>	
			<div className="social">
				<a href="https://facebook.com"><i class="fab fa-facebook"></i></a>
				<a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
			<a href="https://www.linkedin.com"><i class="fab fa-linkedin"></i></a>
		  <a href="https://www.instagram.com"> <i class="fab fa-instagram"></i></a >
		  <a href="https://pl.pinterest.com"> <i class="fab fa-pinterest"></i></a >
			</div>
	    </div>
	  );
	};
}