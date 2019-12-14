import React, { Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

class VideoBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: "/api/videos"
    }).then(res => {
      this.setState({
        videos: res.data.data
      });
    });
  }

  render() {
    const { videos } = this.state;
    return (
      <div className="row video-sidebar-main-section">
        <div
          className="col-md-12"
          style={{
            marginTop: "1em",
            textAlign: "center",
            color: "white",
            fontSize: "30px",
            fontFamily: "Cinzel, serif"
          }}
        >
          <p>Suggested Videos</p>
        </div>
        {videos.map(video => {
          return (
            <div
              key={video._id}
              className="video-section col-md-12"
              style={{ marginTop: "0.4em", textAlign: "center" }}
            >
              {/* {console.log(video.url)} */}
              {ReactHtmlParser(
                `<iframe
                  width="90%"
                  height="295"
                  src=${video.url}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>`
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default VideoBar;
