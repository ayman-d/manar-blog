import React, { Component } from "react";
import axios from "axios";
import { Card, Button, CardText } from "reactstrap";

class LinkBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: []
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: "/api/links"
    }).then(res => {
      this.setState({
        links: res.data.data
      });
    });
  }

  render() {
    const { links } = this.state;
    return (
      <div className="row link-sidebar-main-section">
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
          <p>Suggested Links</p>
        </div>
        {links.map(link => {
          return (
            <div
              key={link._id}
              className="link-section col-md-12"
              style={{ marginTop: "0.4em", textAlign: "center" }}
            >
              <Card body style={{ width: "70%", display: "inline-block" }}>
                <CardText style={{ fontFamily: "Special Elite, cursive" }}>
                  {link.description}
                </CardText>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="light-blue darken-4"
                    style={{ width: "100%", backgroundColor: "black" }}
                  >
                    Visit Link
                  </Button>
                </a>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default LinkBar;
