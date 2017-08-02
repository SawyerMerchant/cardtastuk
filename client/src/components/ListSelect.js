import React from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";

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

export default ListSelect;
