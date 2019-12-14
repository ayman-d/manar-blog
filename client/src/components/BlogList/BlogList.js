import React, { Component } from "react";
import BlogItem from "../BlogItem/BlogItem";
import "./BlogList.css";
import axios from "axios";

class BlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: "/api/blogs"
    }).then(res =>
      this.setState({
        blogs: res.data.data
      })
    );
  }

  render() {
    const { blogs } = this.state;
    return blogs.map(blog => (
      <div key={blog._id}>
        <BlogItem blog={blog} />
      </div>
    ));
  }
}

export default BlogList;
