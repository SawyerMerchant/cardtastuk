import React, { Component } from "react";
import { Grid, Row, Col, Tabs, Tab } from "react-bootstrap";
import PropTypes from "prop-types";
import { getParams, flashMsgs } from "../../helpers";
import FlashMessage from "../Shared/FlashMessage";
import Registration from "./Registration";
import Login from "./Login";

const buildFlash = (error, success, confirmation) => {
  let message;
  let type;

  if (!error && !success && !confirmation) {
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
  } else if (confirmation) {
    message = flashMsgs.successfulConfirmation;
    type = "success";
  } else if (success) {
    message = flashMsgs.successfulRegistration;
    type = "success";
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
    const { onLogin, onRegister, location, organization, admin } = this.props;
    let query = getParams(location.search);
    let flash = buildFlash(query.error, query.success, query.confirmation);

    return (
      <div>
        {flash}
        <Grid className="auth-container">
          <Row>
            <Col md={8} mdOffset={2} xs={10} xsOffset={1}>
              <h1>Log In and Registration</h1>
              <Tabs defaultActiveKey={1} id="authentication-tabs">
                <Tab eventKey={1} title="Login">
                  <Login query={query} onLogin={onLogin} />
                </Tab>
                <Tab eventKey={2} title="Register">
                  <Registration
                    organization={organization}
                    admin={admin}
                    query={query}
                    onRegister={onRegister}
                  />
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
  onLogin: PropTypes.func.isRequired,
  organization: PropTypes.object,
  admin: PropTypes.string
};

export default Auth;
