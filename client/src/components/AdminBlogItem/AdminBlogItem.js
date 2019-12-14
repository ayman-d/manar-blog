import React, { Component } from "react";
import "./AdminBlogItem.css";
import { Link } from "react-router-dom";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import PropTypes from "prop-types";

export class AdminBlogItem extends Component {
  handleDelete = this.props.handleDelete;

  handleEdit = this.props.handleEdit;

  refresher = this.props.refresher;

  render() {
    const { _id, title, image, body, createdDate } = this.props.blog;
    return (
      <div>
        <Card
          style={{
            height: "500px",
            padding: "",
            borderRadius: "0px"
          }}
          className="card-list shadow-md border-0"
        >
          <CardImg
            className="shadow-sm"
            top
            width="100px"
            height="200px"
            src={image}
            alt="Card image cap"
          />
          <CardBody>
            <CardSubtitle style={{ marginTop: "5px" }}>
              <span
                className="badge blue-grey darken-2 white-text"
                data-badge-caption=" "
              >
                {createdDate.substring(0, 10)}
              </span>
            </CardSubtitle>
            <CardTitle>
              <br></br>
              <Link className="" to={"/" + _id}>
                <h5 className="text-center">
                  {title.substring(0, 120) + "..."}
                </h5>
              </Link>
            </CardTitle>
            {/* <CardText>{body.substring(0, 290) + "..."}</CardText> */}
            <div className="row" style={{ position: "absolute", bottom: "0" }}>
              <EditButton
                title={title}
                body={body}
                image={image}
                handleEdit={this.handleEdit}
                refresher={this.refresher}
                className="col-md-3"
              />
              <DeleteButton
                handleDelete={this.handleDelete}
                className="col-md-3"
              />
            </div>
          </CardBody>
        </Card>
        <div className="divider"></div>
      </div>
    );
  }
}

AdminBlogItem.propTypes = {
  blog: PropTypes.object.isRequired
};

export default AdminBlogItem;
