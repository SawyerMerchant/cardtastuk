import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import PropTypes from "prop-types";

const buildCrumbItems = (currentPath, position) => {
  let results = [];
  for (let i = 0; i <= position; i++) {
    if (i === position) {
      results.push(
        <Breadcrumb.Item key={cardSteps[i].name} active>
          {cardSteps[i].name}
        </Breadcrumb.Item>
      );
    } else {
      results.push(
        <li key={cardSteps[i].name}>
          <Link to={`${currentPath}${cardSteps[i].path}`} role="button">
            {cardSteps[i].name}
          </Link>
        </li>
      );
    }
  }

  return results;
};

const cardSteps = [
  {
    name: "1. Write a Message",
    path: "/edit"
  },
  {
    name: "2. Add Your Signature",
    path: "/signature"
  },
  {
    name: "3. Upload a List of Users",
    path: "/upload"
  },
  {
    name: "4. Enter a Return Address",
    path: "/address"
  }
];

const Crumbs = ({ card, position }) => {
  let currentPath = `/cards/${card.id}`;
  let crumbItems = buildCrumbItems(currentPath, position);
  return (
    <Breadcrumb className="crumbs">
      {crumbItems}
    </Breadcrumb>
  );
};

Crumbs.PropTypes = {
  card: PropTypes.object,
  position: PropTypes.number
};

export default Crumbs;
