import React, { Component } from "react";
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
import { getParams, flashMsgs } from "../helpers";
import PropTypes from "prop-types";
import FlashMessage from "./FlashMessage";

const buildFlash = error => {
  let message;
  let type;
  if (!error) {
    return null;
  }

  if (error === "unauthenticated") {
    message = flashMsgs.unauthenticated;
    type = "warning";
  } else if (error === "badPassword") {
    message = flashMsgs.badPass;
    type = "danger";
  } else if (error === "badLogin") {
    message = flashMsgs.badLogin;
    type = "danger";
  }

  return <FlashMessage type={type} message={message} />;
};

class Auth extends Component {
  componentWillMount() {
    if (this.props.isAuthenticated) {
      this.props.history.goBack();
    }
  }

  render() {
    const { onLogin, onRegister, location } = this.props;
    let query = getParams(location.search);
    let flash = buildFlash(query.error);

    return (
      <div>
        {flash}
        <Grid className="auth-container">
          <Row>
            <Col md={8} mdOffset={2} xs={10} xsOffset={1}>
              <h1>Registration and Log In</h1>
              <Tabs defaultActiveKey={1} id="authentication-tabs">
                <Tab eventKey={1} title="Register">
                  <Panel header={"Register for an account today."}>
                    <form onSubmit={e => onRegister(e, query.cardRedirectId)}>
                      <FormGroup controlId="email">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl type="email" name="email" required />
                      </FormGroup>
                      <FormGroup controlId="password">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                          type="password"
                          name="password"
                          minLength={6}
                          required
                        />
                      </FormGroup>
                      <FormGroup controlId="password_confirmation">
                        <ControlLabel>Confirm your password</ControlLabel>
                        <FormControl
                          type="password"
                          name="password_confirmation"
                          minLength={6}
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
                    <form onSubmit={e => onLogin(e, query.cardRedirectId)}>
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
  }
}

Auth.propTypes = {
  onRegister: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired
};

export default Auth;
