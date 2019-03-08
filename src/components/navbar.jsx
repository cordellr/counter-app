import React, { Component } from "react";

//Stateless Functional Component
//since there isn't anything except for a return statement
//({ totalCounters }) replaces 'props' through object destructuring
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
