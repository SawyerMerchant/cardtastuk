import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";

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
    name: "1. Add a Message",
    path: "/edit"
  },
  {
    name: "2. Upload a List of Users",
    path: "/upload"
  },
  {
    name: "3. Enter a Return Address",
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

export default Crumbs;
