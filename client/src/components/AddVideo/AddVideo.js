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

class AddVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      video: {
        url: ""
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
      video: {
        ...this.state.video,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newVideo = {
      url: this.state.video.url
    };
    this.props.handleSubmitVideo(newVideo);
    this.toggle();
    this.setState({
      video: {
        url: ""
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
          Add A New Video
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
                <Label for="url">Video URL</Label>
                <Input
                  type="text"
                  name="url"
                  id="url"
                  placeholder="Add the URL of your new video here"
                  onChange={this.onChange}
                />
              </FormGroup>

              <Button color="dark" block onClick={this.onSubmit}>
                Submit Video
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default AddVideo;
