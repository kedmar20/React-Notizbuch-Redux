import React from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button";
import { Wrapper } from "./UsersListItem.styles";
import { Average2 } from "components/atoms/Average/Average";

export let averageColor;

const UsersListItem = (props) => (
  <Wrapper>
    <Average2 marian={props.stefek.average} />
    <div>
      <p>{props.stefek.name}</p>
      <p>{props.stefek.attendance}</p>
    </div>
    <Button />;
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
