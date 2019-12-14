import React, { Component } from "react";
import "./AddButton.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class AddButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      blogPost: {
        title: "",
        body: "",
        image: ""
      }
    };
  }

  toggle = () => {
    // this.props.refresher();
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({
      blogPost: {
        ...this.state.blogPost,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      title: this.state.blogPost.title,
      body: this.state.blogPost.body,
      image: this.state.blogPost.image
    };
    this.props.handleSubmit(newItem);
    this.toggle();
    this.setState({
      blogPost: {
        title: "",
        body: "",
        image: ""
      }
    });
  };

  render() {
    return (
      <div>
        <Button
          style={{ width: "100%", height: "60px", marginTop: "15px" }}
          color="dark"
          onClick={this.toggle}
        >
          Add A New Post
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="modal-xl"
        >
          <ModalHeader toggle={this.toggle}>Add Post Here</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Add the title of your post here"
                  onChange={this.onChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="image">Image</Label>
                <Input
                  type="text"
                  name="image"
                  id="image"
                  placeholder="Add a link to the post's image"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="body">Body</Label>
                <Input
                  type="textarea"
                  rows="10"
                  name="body"
                  id="body"
                  placeholder="write the main block of your blog here!"
                  onChange={this.onChange}
                />
              </FormGroup>
              <Button color="dark" block onClick={this.onSubmit}>
                Submit Post
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default AddButton;
