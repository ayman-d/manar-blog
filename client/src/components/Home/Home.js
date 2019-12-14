import React, { Component } from "react";
import "./Home.css";
import { Route, Switch, HashRouter } from "react-router-dom";
import BlogDetail from "../BlogDetail/BlogDetail";
import BlogItem from "../BlogItem/BlogItem";

class Home extends Component {
  render() {
    return (
      <HashRouter>
        {/* <Hero /> */}
        <div className="row main-home-list">
          <div className="col-md-12">
            <Switch>
              <Route exact path="/" component={BlogItem} />
              <Route exact path="/:blog_id" component={BlogDetail} />
            </Switch>
          </div>
          {/* <div
            className="side-section col-md-3"
            style={{ marginLeft: "-15px" }}
          ></div> */}
        </div>
      </HashRouter>
    );
  }
}

export default Home;
