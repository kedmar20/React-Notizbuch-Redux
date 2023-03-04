import React from "react";
import PropTypes from "prop-types";

const UsersListItem = (props) => (
  <li>
    {console.log(props)}
    <div>{props.userData.average}</div>
    <div>
      <p>{props.userData.name}</p>
      <p>{props.userData.attendance}</p>
    </div>
    <button>X</button>
  </li>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
