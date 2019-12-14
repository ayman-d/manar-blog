import React, { Component } from "react";
import "./Hero.css";

class Hero extends Component {
  render() {
    return (
      <section className="hero-section">
        <div className="container" style={{ marginRight: "30px" }}>
          <div className="row">
            <div className="col s6 offset-s4">
              <h1 className="hero-text">
                Let's explore things together{" "}
                <i
                  style={{ fontSize: "1em" }}
                  className="fa fa-briefcase ml-2"
                ></i>
              </h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
