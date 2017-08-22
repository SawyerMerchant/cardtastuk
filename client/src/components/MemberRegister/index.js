import React from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";
import serialize from "form-serialize";
import { getParams } from "../../helpers";
import { withRouter } from "react-router-dom";

const handleSubmit = async (e, history) => {
  e.preventDefault();
  const form = e.target;
  const data = serialize(form, { hash: true });

  let config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      first_name: data.first_name,
      last_name: data.last_name,
      organization_id: data.organization,
      email: data.email,
      password: data.password
    })
  };

  try {
    let response = await fetch("/api/v1/members", config);

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    let url = window.location.origin;
    window.location.replace(`${url}/admin/login`);
  } catch (error) {
    console.log(error);
  }
};

const MemberRegister = ({ history, location }) => {
  let query = getParams(location.search);
  return (
    <Grid>
      <Row>
        <Col md={12}>
          <h1>Sign Up as a Member</h1>
          <form onSubmit={e => handleSubmit(e, history)}>
            <FormGroup controlId="first_name">
              <ControlLabel>First Name</ControlLabel>
              <FormControl
                defaultValue={query.first_name}
                type="text"
                name="first_name"
                required
              />
            </FormGroup>
            <FormGroup controlId="last_name">
              <ControlLabel>Last Name</ControlLabel>
              <FormControl
                defaultValue={query.last_name}
                type="text"
                name="last_name"
              />
            </FormGroup>
            <FormControl
              value={query.organization}
              type="hidden"
              name="organization"
            />
            <FormGroup controlId="email">
              <ControlLabel>Email</ControlLabel>
              <FormControl
                defaultValue={query.email}
                type="email"
                name="email"
                required
              />
            </FormGroup>
            <FormGroup controlId="password">
              <ControlLabel>Password</ControlLabel>
              <FormControl type="password" name="password" required />
            </FormGroup>
            <Button type="submit" bsStyle="info">Join as a Member</Button>
          </form>
        </Col>
      </Row>
    </Grid>
  );
};

export default withRouter(MemberRegister);
