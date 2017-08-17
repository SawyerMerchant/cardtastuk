import React from "react";
import {
  Panel,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";
import PropTypes from "prop-types";

const Registration = ({ organization, admin, query, onRegister }) => {
  return (
    <Panel header={"Register for an account today."}>
      <form
        onSubmit={e => onRegister(e, organization, admin, query.cardRedirectId)}
      >
        <FormGroup controlId="email">
          <ControlLabel>Email</ControlLabel>
          <FormControl type="email" name="email" required />
        </FormGroup>
        <FormGroup controlId="password">
          <ControlLabel>Password</ControlLabel>
          <FormControl type="password" name="password" minLength={6} required />
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
  );
};

Registration.propTypes = {
  onRegister: PropTypes.func.isRequired,
  query: PropTypes.object,
  admin: PropTypes.string,
  organization: PropTypes.object
};

export default Registration;
