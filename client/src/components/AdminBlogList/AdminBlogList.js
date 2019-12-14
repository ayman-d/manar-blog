import React, { Component } from "react";
import AdminBlogItem from "../AdminBlogItem/AdminBlogItem";
import "./AdminBlogList.css";
import axios from "axios";
import AddButton from "../AddButton/AddButton";
import AddVideo from "../AddVideo/AddVideo";
import AddLink from "../AddLink/AddLink";
import LogoutButton from "../LogoutButton/LogoutButton";
import Materialize from "materialize-css";

class AdminBlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      newItem: {
        title: "",
        body: "",
        image: ""
      },
      tempMessage: "",
      videos: [],
      links: []
    };
  }

  updatescreen = () => {
    axios({
      method: "get",
      url: "/api/blogs"
    }).then(res =>
      this.setState({
        blogs: res.data.data
      })
    );
    setTimeout(() => {
      this.setState({
        tempMessage: ""
      });
    }, 3000);
  };

  refresher = () => {
    const userToken = localStorage.getItem("token");
    const existingRefreshToken = localStorage.getItem("refreshToken");
    if (userToken) {
      axios
        .post("/api/auth/refresh", {
          headers: { "x-refresh-token": existingRefreshToken }
        })
        .then(res => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("refreshToken", res.data.refreshToken);
          console.log("refreshed!");
        })
        .catch(err => {
          if (err.response.status === 403) {
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
            window.location = "/login";
          }
        });
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      window.location = "/login";
    }
  };

  componentDidUpdate() {
    setInterval(() => {
      this.refresher();
    }, 20000);
  }

  componentDidMount() {
    this.refresher();
    axios({
      method: "get",
      url: "/api/blogs"
    }).then(res =>
      this.setState({
        blogs: res.data.data
      })
    );
  }

  handleDelete = id => {
    const deleteToken = localStorage.getItem("token");
    axios
      .delete(`/api/blogs/${id}`, { headers: { "x-auth-token": deleteToken } })
      .then(res => {
        this.setState({
          blogs: this.state.blogs.filter(i => i._id !== res.data.data._id),
          tempMessage: res.data.msg
        });
        Materialize.toast({
          html: res.data.msg,
          displayLength: "6000",
          classes: "red lighten-4 black-text text-darken-2 h1"
        });
      })
      .catch(err => {
        if (err.response.status === 403) {
          localStorage.removeItem("token");
          localStorage.removeItem("refreshToken");
          window.location = "/login";
        }
      });
    setTimeout(() => {
      this.updatescreen();
    }, 250);
  };

  handleSubmit = newItem => {
    const newToken = localStorage.getItem("token");
    axios
      .post("/api/blogs", newItem, { headers: { "x-auth-token": newToken } })
      .then(res => {
        this.setState({
          blogs: [...this.state.blogs, res.data.data],
          tempMessage: res.data.msg
        });
        Materialize.toast({
          html: res.data.msg,
          displayLength: "6000",
          classes: "red lighten-4 black-text text-darken-2 h1"
        });
      })
      .catch(err => {
        if (err.response.status === 403) {
          localStorage.removeItem("token");
          localStorage.removeItem("refreshToken");
          window.location = "/login";
        }
      });

    setTimeout(() => {
      this.updatescreen();
    }, 250);
  };

  handleSubmitVideo = newVideo => {
    const newToken = localStorage.getItem("token");
    axios
      .post("/api/videos", newVideo, { headers: { "x-auth-token": newToken } })
      .then(res => {
        this.setState({
          videos: [...this.state.videos, res.data.data],
          tempMessage: res.data.msg
        });
        Materialize.toast({
          html: res.data.msg,
          displayLength: "6000",
          classes: "red lighten-4 black-text text-darken-2 h1"
        });
      })
      .catch(err => {
        if (err.response.status === 403) {
          localStorage.removeItem("token");
          localStorage.removeItem("refreshToken");
          window.location = "/login";
        }
      });
    setTimeout(() => {
      this.updatescreen();
    }, 250);
  };

  handleSubmitLink = newLink => {
    const newToken = localStorage.getItem("token");
    axios
      .post("/api/links", newLink, { headers: { "x-auth-token": newToken } })
      .then(res => {
        this.setState({
          links: [...this.state.videos, res.data.data],
          tempMessage: res.data.msg
        });
        Materialize.toast({
          html: res.data.msg,
          displayLength: "6000",
          classes: "red lighten-4 black-text text-darken-2 h1"
        });
      })
      .catch(err => {
        if (err.response.status === 403) {
          localStorage.removeItem("token");
          localStorage.removeItem("refreshToken");
          window.location = "/login";
        }
      });
    setTimeout(() => {
      this.updatescreen();
    }, 250);
  };

  handleEdit = (id, editedItem) => {
    const editToken = localStorage.getItem("token");
    axios
      .put(`/api/blogs/${id}`, editedItem, {
        headers: { "x-auth-token": editToken }
      })
      .then(res => {
        this.setState({
          tempMessage: res.data.msg
        });
        Materialize.toast({
          html: res.data.msg,
          displayLength: "6000",
          classes: "red lighten-4 black-text text-darken-2 h1"
        });
      })
      .catch(err => {
        if (err.response.status === 403) {
          localStorage.removeItem("token");
          localStorage.removeItem("refreshToken");
          window.location = "/login";
        }
      });
    setTimeout(() => {
      this.updatescreen();
    }, 250);
  };

  handleLogout = () => {
    window.location = "/";
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
  };

  render() {
    const { blogs } = this.state;
    return (
      <div className="row">
        <div className="row col-md-9">
          {blogs.map(blog => (
            <div className="main-list col-md-4" key={blog._id}>
              <AdminBlogItem
                blog={blog}
                handleEdit={this.handleEdit.bind(this, blog._id)}
                handleDelete={this.handleDelete.bind(this, blog._id)}
                // refresher={this.refresher}
              />
              <div></div>
            </div>
          ))}
        </div>
        <div className="col-lg-3">
          <AddButton
            handleSubmit={this.handleSubmit}
            // refresher={this.refresher}
          />
          <AddVideo handleSubmitVideo={this.handleSubmitVideo} />
          <AddLink handleSubmitLink={this.handleSubmitLink} />
          <LogoutButton
            handleLogout={this.handleLogout}
            // refresher={this.refresher}
          />
        </div>
      </div>
    );
  }
}

export default AdminBlogList;
