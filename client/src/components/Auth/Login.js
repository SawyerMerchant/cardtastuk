import React from "react";
import {
  Panel,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";

const Login = ({ query, onLogin }) => {
  return (
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
  );
};

export default Login;
