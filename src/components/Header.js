import React from "react";
import { Link } from "react-router-dom";

export const Header = props => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="user">User</Link>
        <Link to="FAQ">FAQ</Link>
         <Link to="Contact">Contact</Link>
      </nav>
    </div>
  );
};