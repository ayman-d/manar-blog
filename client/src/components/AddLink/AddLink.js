import React, { Component } from "react";
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

class AddLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      link: {
        url: "",
        description: ""
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
      link: {
        ...this.state.link,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newLink = {
      url: this.state.link.url,
      description: this.state.link.description
    };
    this.props.handleSubmitLink(newLink);
    this.toggle();
    this.setState({
      video: {
        url: "",
        description: ""
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
          Add A New Link
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="modal-xl"
        >
          <ModalHeader toggle={this.toggle}>Add Link Here</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="url">Link URL</Label>
                <Input
                  type="text"
                  name="url"
                  id="url"
                  placeholder="Add the URL of your new link here"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Link Description</Label>
                <Input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Add the description of your new link here"
                  onChange={this.onChange}
                />
              </FormGroup>

              <Button color="dark" block onClick={this.onSubmit}>
                Submit Link
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default AddLink;
