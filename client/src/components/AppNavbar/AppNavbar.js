import React, { Component } from "react";
import "./AppNavbar.css";
import { Link } from "react-router-dom";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <nav className="grey darken-4" style={{ height: "100px" }}>
          <div className="nav-wrapper valign-wrapper">
            <div className="container">
              <a href="/" className="brand">
                Manar's Blog
              </a>
              <a href="/" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="/">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-pinterest-square"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <Link
                    className="beep waves-effect waves-light btn-md deep-orange darken-1"
                    to={"/contact"}
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <ul className="sidenav sidenav-close grey darken-4" id="mobile-demo">
          <li>
            <a href="/">
              <i className="fa fa-instagram white-text"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa fa-facebook-square white-text"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa fa-pinterest-square white-text"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa fa-youtube white-text"></i>
            </a>
          </li>
          <li className="sidenav-trigger">
            <Link
              className="beep waves-effect waves-light btn-md deep-orange darken-1 white-text"
              style={{ fontSize: "20px" }}
              to={"/contact"}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default AppNavbar;
