import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";
import PropTypes from "prop-types";

class ListUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_uri: null
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onUpload(e, this.state.data_uri, this.props.user);
    e.target.reset();
  };

  handleFile = e => {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onload = upload => {
      this.setState({
        data_uri: upload.target.result,
        filename: file.name,
        filetype: file.type
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  render() {
    return (
      <div>
        <p>
          Upload a CSV with your recipients using the form below. Don't forget
          to name your list (e.g. "Friends", "Clients", etc.)!
        </p>
        <form
          id="list-upload"
          onSubmit={this.handleSubmit}
          encType="multipart/form-data"
        >
          <FormGroup controlId="list_upload">
            <ControlLabel>Select a CSV</ControlLabel>
            <FormControl
              type="file"
              name="list_upload"
              onChange={this.handleFile}
              required
            />
          </FormGroup>
          <FormGroup controlId="list_name">
            <ControlLabel>Give this group a name:</ControlLabel>
            <FormControl type="text" name="list_name" required />
          </FormGroup>
          <Button bsStyle="success" type="submit">
            Upload
          </Button>
        </form>
      </div>
    );
  }
}

ListUpload.propTypes = {
  onUpload: PropTypes.func.isRequired
};

export default ListUpload;
