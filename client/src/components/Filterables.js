import React from 'react';
import { Row, Col, FormControl } from 'react-bootstrap';

const buildCategoryOptions = categories => {
  return categories.map(category => 
    <option key={category} value={category}>{category}</option>
  )
};

const buildTagOptions = tags => {
  return tags.map(tag => 
    <option key={tag} value={tag}>{tag}</option>
  )
};

const Filterables = ({categories, tags}) => {
  let categoryOptions = buildCategoryOptions(categories);
  let tagOptions = buildTagOptions(tags);
  return (
    <Row>
      <Col>
        <FormControl componentClass="select" name="category">
          {categoryOptions}
        </FormControl>
        <FormControl componentClass="select" name="tag">
          {tagOptions}
        </FormControl>
      </Col>
    </Row>
  );
};

export default Filterables;