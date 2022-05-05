import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="navbar navbar-expand-lg navbar-light mb-3">
      <div className="container-fluid">
        <div className="container-fluid">
          <h1 className="navbar-brand">
            © Copyrights 2022. All Rights Reserved.
          </h1>
        </div>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
