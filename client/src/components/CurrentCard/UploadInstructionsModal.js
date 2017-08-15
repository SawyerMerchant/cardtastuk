import React, { Component } from "react";
import { Button, Modal, Glyphicon, Table } from "react-bootstrap";

class UploadInstructionsModal extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  close = () => {
    this.setState({ showModal: false });
  };

  open = e => {
    this.setState({ showModal: true });
  };

  render() {
    return (
      <div className="upload-modal">
        <Button className="upload-instructions-modal-btn" onClick={this.open}>
          <Glyphicon glyph="question-sign" />{" "}
          Lost? Click here to see how to setup your contacts file.
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>
              Upload Instructions
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              In order to upload your files to the CardTastuk site, they must be
              formatted in the following manner:
            </p>
            <Table striped>
              <thead>
                <tr>
                  <th>first_name</th>
                  <th>last_name</th>
                  <th>address_line1</th>
                  <th>address_line2</th>
                  <th>city</th>
                  <th>state</th>
                  <th>zip</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Recipient First Name</td>
                  <td>Recipient Last Name</td>
                  <td>Recipient Address Line 1</td>
                  <td>Recipient Address Line 2</td>
                  <td>Recipient City</td>
                  <td>Recipient State</td>
                  <td>Recipient Zip</td>
                </tr>
              </tbody>
            </Table>

            <p>
              If you are using Microsoft Excel, please
              {" "}
              <a href="https://support.office.com/en-us/article/Import-or-export-text-txt-or-csv-files-5250ac4c-663c-47ce-937b-339e391393ba">
                click on the following link
              </a>{" "}
              to view detailed instructions on turning your Excel file into a
              CSV.
            </p>
            <p>
              For Google Sheets users, simply open your sheet, then click on{" "}
              <strong>File</strong> > <strong>Download As</strong> >{" "}
              <strong>Comma-separated values (.csv, current sheet)</strong>.
            </p>
            <p>
              You can also
              {" "}
              <a href="https://s3-us-west-2.amazonaws.com/cardtastuk-csv-lists/exampleContacts.csv">
                download an example template here
              </a>{" "}
              and fill in with your own contacts to get started.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} bsStyle="primary">Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default UploadInstructionsModal;
