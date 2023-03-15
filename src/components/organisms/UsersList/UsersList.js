import React, { useContext } from "react";
// import { UsersContext } from "providers/UsersProvider";
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { StyledList } from "./UsersList.styles";
import { UserShape } from "types";
import { Title } from "components/atoms/Title/Title";
import PropTypes from "prop-types";

const UsersList = ({ users }) => {
   // const { users = [] } = useContext(UsersContext);

   return (
      <>
         <Title>Studentenliste:</Title>
         <StyledList>
            {users.map((userData) => (
               <UsersListItem key={userData.name} userData={userData} />
            ))}
         </StyledList>
      </>
   );
};

UsersList.propTypes = {
   users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
   deleteUser: PropTypes.func,
};

export default UsersList;
