import React, { Component } from "react";
import "./EditButton.css";
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

class EditButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      editedItem: {
        title: this.props.title,
        body: this.props.body,
        image: this.props.image
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
      editedItem: {
        ...this.state.editedItem,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const editedItem = {
      title: this.state.editedItem.title,
      body: this.state.editedItem.body,
      image: this.state.editedItem.image
    };
    this.props.handleEdit(editedItem);
    this.toggle();
  };

  render() {
    return (
      <div style={{ margin: "2px" }}>
        <button className="btn-large orange" onClick={this.toggle}>
          Edit Post
        </button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="modal-xl"
        >
          <ModalHeader toggle={this.toggle}>Edit Your Post</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  defaultValue={this.props.title}
                  contentEditable="true"
                  onChange={this.onChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="image">Image</Label>
                <Input
                  type="texwt"
                  name="image"
                  id="image"
                  defaultValue={this.props.image}
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
                  defaultValue={this.props.body}
                  placeholder="go crazy!"
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

export default EditButton;
