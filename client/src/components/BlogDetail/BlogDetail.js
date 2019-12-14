import React, { Component } from "react";
import axios from "axios";
import VideoBar from "../VideoBar/VideoBar";
import LinkBar from "../LinkBar/LinkBar";
import ReactHtmlParser from "react-html-parser";

class BlogDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blog: 0
    };
  }

  // how to obtain the id given in the parameter (the digits in the url, like Id)
  componentDidMount() {
    // assign the url params to "id" which is then passed to the api to identify the specific data we want
    let id = this.props.match.params.blog_id;
    window.scrollTo(0, 0);
    // this following line obtains the post with our specific id which is the id of the item we clicked on.
    axios.get("api/blogs/" + id).then(res => {
      this.setState({
        // reassign the post value in the state with the data from the axios.get
        blog: res.data.data
      });
    });
  }

  render() {
    const { title, body, createdDate, image } = this.state.blog;
    const blog = this.state.blog ? (
      <div className="row" style={{ marginLeft: "5px", marginRight: "5px" }}>
        <div className="col-md-8" style={{ padding: "0" }}>
          <img
            style={{
              height: "70vh",
              width: "100%",
              display: "block",
              margin: "auto"
            }}
            src={image}
            alt="/"
          />
          <span
            style={{ position: "absolute", left: "10", margin: "1.5em" }}
            className="badge blue-grey darken-2 white-text"
            data-badge-caption=" "
          >
            {createdDate.substring(0, 10)}
          </span>

          <p
            style={{
              textAlign: "center",
              marginTop: "1.5em",
              fontSize: "50px",
              lineHeight: "60px",
              fontFamily: "Open Sans Condensed, sans-serif",
              fontWeight: "bold"
            }}
            className="detail-title"
          >
            {title}
          </p>

          <hr
            style={{
              width: "50%",
              border: "0",
              height: "1px",
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))"
            }}
          ></hr>
          <p
            style={{
              margin: "1.5em",
              fontSize: "20px",
              whiteSpace: "pre-wrap",
              fontFamily: "Special Elite, cursive"
            }}
            className="detail-title"
          >
            {ReactHtmlParser(body)}
          </p>
        </div>
        <div className="side-section col-md-4" style={{ marginLeft: "-15px" }}>
          <VideoBar />
          <hr
            style={{
              backgroundColor: "white",
              border: "3",
              height: "2px",
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))"
            }}
          ></hr>
          <LinkBar />
          <hr
            style={{
              backgroundColor: "white",
              border: "3",
              height: "2px",
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))"
            }}
          ></hr>
        </div>
      </div>
    ) : (
      <div className="center">Loading...</div>
    );

    return <div>{blog}</div>;
  }
}

export default BlogDetail;
