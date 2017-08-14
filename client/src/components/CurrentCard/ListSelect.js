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

  return (
    <div>
      <p>
        If you've already uploaded a list of users, go ahead and choose a
        list now.
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
