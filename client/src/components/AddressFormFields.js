import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import USAStatesDropdown from "./USAStatesDropdown";

const AddressFormFields = () => {
  return (
    <div>
      <FormGroup controlId="street_address_1">
        <ControlLabel>Street Address 1</ControlLabel>
        <FormControl type="text" name="street_address_1" required />
      </FormGroup>
      <FormGroup controlId="street_address_2">
        <ControlLabel>Street Address 2</ControlLabel>
        <FormControl type="text" name="street_address_2" />
      </FormGroup>
      <FormGroup controlId="city">
        <ControlLabel>City</ControlLabel>
        <FormControl type="text" name="city" required />
      </FormGroup>
      <FormGroup controlId="state">
        <ControlLabel>State</ControlLabel>
        <USAStatesDropdown />
      </FormGroup>
      <FormGroup controlId="zipcode">
        <ControlLabel>Zipcode</ControlLabel>
        <FormControl
          type="text"
          pattern="(\d{5}([\-]\d{4})?)"
          name="zipcode"
          title="Zip code should be in American zip code format, e.g. 10004, 10004-2413"
          minLength={5}
          required
        />
      </FormGroup>
    </div>
  );
};

export default AddressFormFields;
