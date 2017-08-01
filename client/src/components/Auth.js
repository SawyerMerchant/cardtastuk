import React from "react";
import {
  Grid,
  Row,
  Col,
  Tabs,
  Tab,
  Panel,
  FormControl,
  FormGroup,
  ControlLabel,
  Button
} from "react-bootstrap";
import { getParams } from "../helpers";
import FlashMessage from "./FlashMessage";

const Auth = ({ onLogin, onRegister, location }) => {
  let query = getParams(location.search);
  let flash = null;
  if (query.error === "unauthenticated") {
    flash = <FlashMessage type="warning" message="Please login first before continuing." />
  }
  return (
    <div>
      {flash}
      <Grid className="auth-container">
        <Row>
          <Col md={8} mdOffset={2} xs={10} xsOffset={1}>
            <h1>Registration and Sign In</h1>
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
              <Tab eventKey={1} title="Register">
                <Panel header={"Register for an account today."}>
                  <form onSubmit={onRegister}>
                    <FormGroup controlId="email">
                      <ControlLabel>Email</ControlLabel>
                      <FormControl type="email" name="email" required />
                    </FormGroup>
                    <FormGroup controlId="password">
                      <ControlLabel>Password</ControlLabel>
                      <FormControl type="password" name="password" required />
                    </FormGroup>
                    <FormGroup controlId="password_confirmation">
                      <ControlLabel>Confirm your password</ControlLabel>
                      <FormControl
                        type="password"
                        name="password_confirmation"
                        required
                      />
                    </FormGroup>
                    <Button bsStyle="success" type="submit">
                      Register for an Account
                    </Button>
                  </form>
                </Panel>
              </Tab>
              <Tab eventKey={2} title="Login">
                <Panel header={"Login to an existing account."}>
                  <form onSubmit={onLogin}>
                    <FormGroup controlId="email">
                      <ControlLabel>Email</ControlLabel>
                      <FormControl type="email" name="email" required />
                    </FormGroup>
                    <FormGroup controlId="password">
                      <ControlLabel>Password</ControlLabel>
                      <FormControl type="password" name="password" required />
                    </FormGroup>
                    <Button bsStyle="success" type="submit">Login</Button>
                  </form>
                </Panel>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Auth;
