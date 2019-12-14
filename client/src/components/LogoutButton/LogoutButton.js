import React, { Component } from "react";

class LogoutButton extends Component {
  render() {
    return (
      <div style={{ marginBottom: "30px" }} onClick={this.props.refresher}>
        <button
          style={{ width: "100%", height: "60px", marginTop: "10px" }}
          className="btn-large"
          onClick={() => {
            if (window.confirm("Are you sure you wish to log out?"))
              this.props.handleLogout();
          }}
        >
          Logout
        </button>
      </div>
    );
  }
}

export default LogoutButton;
