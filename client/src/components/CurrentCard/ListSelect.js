import React from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";

const buildListOptions = lists => {
  return lists.map(list =>
    <option key={list.id} value={list.id}>{list.name}</option>
  );
};

const ListSelect = ({ setCurrentList, lists }) => {
  const listOptions = buildListOptions(lists);

  if (lists.length === 0) {
    return null;
  }

  return (
    <div>
      <p>
        Now, select the list you want to use for this mailing.
      </p>
      <form id="choose-list">
        <FormGroup controlId="list" onChange={e => setCurrentList(e, lists)}>
          <ControlLabel>
            Choose a group to receive your cards:
          </ControlLabel>
          <FormControl componentClass="select" name="list_id">
            {listOptions}
          </FormControl>
        </FormGroup>
      </form>
    </div>
  );
};

ListSelect.propTypes = {
  lists: PropTypes.array.isRequired,
  setCurrentList: PropTypes.func.isRequired
};

export default ListSelect;
