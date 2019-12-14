import React, { Component } from "react";

class DeleteButton extends Component {
  render() {
    return (
      // <div onClick={this.props.refresher}>
      <div style={{ margin: "2px" }}>
        <button
          className="btn-large red"
          onClick={() => {
            if (window.confirm("Are you sure you wish to delete this item?"))
              this.props.handleDelete();
          }}
        >
          Delete Post
        </button>
      </div>
    );
  }
}

export default DeleteButton;
