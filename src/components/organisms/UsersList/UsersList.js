import React from "react";
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { StyledList, Wrapper } from "./UsersList.styles";
import { UserShape } from "types";
import { Title } from "components/atoms/Title/Title";
import PropTypes from "prop-types";

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Wrapper>
        <Title>Studentenliste:</Title>
        <StyledList>
          {users.map((userDataMK) => (
            <UsersListItem
              deleteUser={deleteUser}
              key={userDataMK.name}
              userMkData={userDataMK}
            />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;
