import React from "react";
import { FormControl, FormGroup, ControlLabel } from "react-bootstrap";
import { cardFonts } from "../helpers";

const buildFontOptions = fonts => {
  return fonts.map(font =>
    <option value={font.cssName} key={font.cssName}>{font.name}</option>
  );
};

const FontPicker = ({ onChangeFont }) => {
  let fontOptions = buildFontOptions(cardFonts);
  return (
    <div className="font-picker">
      <FormGroup controlId="font">
        <ControlLabel>Pick a font:</ControlLabel>
        <FormControl
          componentClass="select"
          name="font"
          onChange={onChangeFont}
        >
          {fontOptions}
        </FormControl>
      </FormGroup>
    </div>
  );
};

export default FontPicker;
