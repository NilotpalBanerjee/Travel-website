import React from "react";
import { Link } from "react-router-dom";
function navbar() {
  return (
    <>
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tours">
            Tours
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/destinations">
            Destinations
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </>
  );
}

export default navbar;
