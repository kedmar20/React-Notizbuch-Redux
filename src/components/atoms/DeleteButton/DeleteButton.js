import React, { useContext } from "react";
import { ReactComponent as DeleteIcon } from "assets/icons/delete-icon.svg";
import { StyledButton } from "./DeleteButton.styles";
import { UsersContext } from "providers/UsersProvider";

const DeleteButton = ({ name }) => {
   const { deleteUser } = useContext(UsersContext);
   return (
      <StyledButton onClick={() => deleteUser(name)}>
         <DeleteIcon />
      </StyledButton>
   );
};

export default DeleteButton;
