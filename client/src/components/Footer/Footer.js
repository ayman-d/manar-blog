import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <div style={{ textAlign: "left" }}>
          <footer
            className="page-footer grey darken-4"
            style={{ height: "150px" }}
          >
            <div className="footer-copyright">
              <div className="col-md-4 container" style={{ marginTop: "10px" }}>
                © 2019 Copyright Manar-Blog
              </div>
              <div
                className="col-md-4 container"
                style={{
                  marginTop: "10px",
                  marginLeft: "30px",
                  width: "140%"
                }}
              >
                <div style={{ fontSize: "2vem" }}>
                  This website was built by
                  <a
                    style={{ overflow: "stretch" }}
                    href="/"
                    className="btn deep-orange darken-4 white-text ml-2"
                  >
                    Ayman Al-Dali
                  </a>
                </div>
              </div>
              <div className="col-md-4" style={{ marginTop: "30px" }}>
                <ul
                  className="right hide-on-med-and-down"
                  style={{ textAlign: "center", marginRight: "50px" }}
                >
                  <li style={{ display: "inline-block", marginLeft: "8px" }}>
                    <a href="/">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li style={{ display: "inline-block", marginLeft: "8px" }}>
                    <a href="/">
                      <i className="fa fa-facebook-square"></i>
                    </a>
                  </li>
                  <li style={{ display: "inline-block", marginLeft: "8px" }}>
                    <a href="/">
                      <i className="fa fa-pinterest-square"></i>
                    </a>
                  </li>
                  <li style={{ display: "inline-block", marginLeft: "8px" }}>
                    <a href="/">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
