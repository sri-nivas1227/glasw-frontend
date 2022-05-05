import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Asset/logo.png";
import "../App.css";
import getCookie from "../cookies/getCookie";
import deleteCookie from "../cookies/deleteCookie";
const Navbar = () => {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (getCookie("token")) {
      setLogin(true);
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        "http://localhost:3000/api/v1/userinfo?token=" + getCookie("token"),
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.status == "success") {
            setName(result.user.name);
          }
        })
        .catch((error) => console.log("error", error));
    }
  }, []);
  return (
    <section className="p-4 ">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" width="80" height="80"></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/register">
                      start-ups
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/loans">
                      Green loans
                    </Link>
                  </li>
                </ul>
              </li>

              {name.length > 0 && (
                <li className="nav-item">
                  <a className="nav-link">Hey! {name}</a>
                </li>
              )}

              <li className="nav-item">
                {login ? (
                  <a
                    className="nav-link"
                    onClick={() => {
                      deleteCookie("token");
                      setName("");
                      navigate("/login");
                      setLogin(false);
                    }}
                  >
                    Logout
                  </a>
                ) : (
                  <Link className="nav-link" to="/login">
                    Login & Sign Up
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};
export default Navbar;
