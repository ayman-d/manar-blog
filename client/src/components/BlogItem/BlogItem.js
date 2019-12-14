import React, { Component } from "react";
import "./BlogItem.css";
import "materialize-css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Hero from "../Hero/Hero";
import VideoBar from "../VideoBar/VideoBar";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import LinkBar from "../LinkBar/LinkBar";

class BlogItem extends Component {
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
    // const { _id, title, image, body, createdDate } = this.props.blog;

    return (
      <div
        className="row main-list-b"
        style={{ overflow: "scroll", height: "200vh" }}
      >
        <div className="col-md-12">
          <Hero />
        </div>
        {/* main container */}
        <div
          className="row col-md-8 wooshop"
          style={{
            marginLeft: "0px",
            marginRight: "-30px"
          }}
        >
          <div className="col-md-12" style={{ marginBottom: "2em" }}>
            <h1
              style={{ textAlign: "center", margin: " 20px 0px" }}
              className="booga"
            >
              My Latest Posts
            </h1>
            <hr
              style={{
                width: "50%",
                border: "0",
                height: "1px",
                backgroundImage:
                  "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))"
              }}
            ></hr>
          </div>
          {blogs.map(blog => {
            return (
              // section inside the main section, one third of the main section for each ittiration
              <div className="col-md-4" key={blog._id}>
                <div className="card-link">
                  <Link className="" to={"/" + blog._id}>
                    <Card
                      style={{
                        height: "400px",
                        padding: "",
                        borderRadius: "0px"
                      }}
                      className="card-list shadow-md border-0 white darken-1"
                    >
                      <CardImg
                        className="shadow-sm"
                        top
                        width="100px"
                        height="200px"
                        src={blog.image}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardSubtitle style={{ marginTop: "5px" }}>
                          <span
                            className="badge blue-grey darken-2 white-text"
                            data-badge-caption=" "
                          >
                            {blog.createdDate.substring(0, 10)}
                          </span>
                        </CardSubtitle>
                        <CardTitle>
                          <br></br>
                          <h5
                            className="text-center"
                            // style={{ color: "white" }}
                          >
                            {blog.title.substring(0, 120) + "..."}
                          </h5>
                        </CardTitle>
                      </CardBody>
                      <hr
                        style={{
                          border: "0",
                          height: "1px",
                          backgroundImage:
                            "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))"
                        }}
                      ></hr>
                    </Card>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="side-section col-md-4"
          style={{ marginLeft: "15px", padding: "0" }}
        >
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
    );
  }
}

// BlogItem.propTypes = {
//   blog: PropTypes.object.isRequired
// };

export default BlogItem;
