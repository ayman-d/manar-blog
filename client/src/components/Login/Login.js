import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userToken: "",
      user: {
        email: "",
        password: ""
      },
      isError: false,
      isErrorText: ""
    };
  }

  onChange = async e => {
    await this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const userLogin = {
      email: this.state.user.email,
      password: this.state.user.password
    };
    axios
      .post("/api/auth", {
        email: userLogin.email,
        password: userLogin.password
      })
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("refreshToken", res.data.refreshToken);
          window.location = "/admin";
        }
      })
      .catch(err => {
        if (err.response.status === 400) {
          this.setState({
            isError: true,
            isErrorText: err.response.data.msg
          });
          localStorage.removeItem("token");
          setTimeout(() => {
            this.setState({
              isError: false,
              isErrorText: ""
            });
          }, 3000);
        }
      });
  };

  render() {
    return (
      <div className="container">
        <div className="col-lg-12">
          {this.state.isError && (
            <div className="card-panel red lighten-2 white-text">
              {this.state.isErrorText}
            </div>
          )}
          <form style={{ marginTop: "60px" }} onSubmit={this.onSubmit}>
            <div className="input-field col s12">
              <i className="material-icons prefix">person</i>
              <label htmlFor="email">Email</label>

              <input
                style={{ padding: "5px" }}
                autoFocus={true}
                id="email"
                name="email"
                type="email"
                className="validate"
                onChange={this.onChange}
              />
            </div>

            <div className="input-field col s12">
              <i className="material-icons prefix">lock</i>
              <label htmlFor="password">Password</label>
              <input
                style={{ padding: "5px" }}
                id="password"
                name="password"
                type="password"
                className="validate"
                onChange={this.onChange}
              />
            </div>

            <button onClick={this.onSubmit} className="btn blue white-text m-5">
              Sign In
            </button>
          </form>
          <br />
          <hr />
          <br />

          <button
            className="btn white white-text"
            style={{ marginBottom: "80px", marginTop: "-30px" }}
          >
            <Link to="/">Go back to main page</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
