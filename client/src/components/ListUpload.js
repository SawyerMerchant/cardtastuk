import React from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

const ListUpload = ({ user, onUpload }) => {
  return (
    <div>
      <p>
        Otherwise, upload a group of users here.
      </p>
      <form id="list-upload" onSubmit={e => onUpload(e, user)}>
        <FormGroup controlId="list_upload">
          <ControlLabel>Select a CSV</ControlLabel>
          <FormControl type="file" name="list_upload" required />
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
};

export default ListUpload;
