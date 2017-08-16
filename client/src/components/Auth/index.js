import React, { Component } from "react";
import { Grid, Row, Col, Tabs, Tab } from "react-bootstrap";
import PropTypes from "prop-types";
import { getParams, flashMsgs } from "../../helpers";
import FlashMessage from "../Shared/FlashMessage";
import Registration from "./Registration";
import Login from "./Login";

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
    const { onLogin, onRegister, location, organization, admin } = this.props;
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
                  <Registration
                    organization={organization}
                    admin={admin}
                    query={query}
                    onRegister={onRegister}
                  />
                </Tab>
                <Tab eventKey={2} title="Login">
                  <Login query={query} onLogin={onLogin} />
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
