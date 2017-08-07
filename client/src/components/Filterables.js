import React from "react";
import {
  Row,
  Col,
  FormControl,
  FormGroup,
  ControlLabel
} from "react-bootstrap";

const buildCategoryOptions = categories => {
  return categories.map(category =>
    <option key={category} value={category}>{category}</option>
  );
};

const buildTagOptions = tags => {
  return tags.map(tag => <option key={tag} value={tag}>{tag}</option>);
};

const Filterables = ({ categories, tags, onChangeTag, onChangeCategory }) => {
  let categoryOptions = buildCategoryOptions(categories);
  let tagOptions = buildTagOptions(tags);
  return (
    <Row className="filterables">
      <Col md={2}>
        <FormGroup controlId="category">
          <ControlLabel>
            Category
          </ControlLabel>
          <FormControl
            componentClass="select"
            name="category"
            onChange={onChangeCategory}
          >
            <option value="">None</option>
            {categoryOptions}
          </FormControl>
        </FormGroup>
      </Col>
      <Col md={2}>
        <FormGroup controlId="tag">
          <ControlLabel>
            Tag
          </ControlLabel>
          <FormControl
            componentClass="select"
            name="tag"
            onChange={onChangeTag}
          >
            <option value="">None</option>
            {tagOptions}
          </FormControl>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default Filterables;
