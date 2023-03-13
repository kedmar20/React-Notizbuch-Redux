import React from "react";
import PropTypes from "prop-types";
import DeleteButton from "components/atoms/DeleteButton/DeleteButton";
import { StyledAverage, StyledInfo, Wrapper } from "./UsersListItem.styles";

const UsersListItem = ({ userData: { average, name, attendance = "0%" } }) => {
   return (
      <Wrapper>
         <StyledAverage value={average}>
            <p>Semester:</p>
            <p>{average}</p>
         </StyledAverage>
         <StyledInfo>
            <p>
               {name}
               <DeleteButton name={name} />
            </p>
            <p>Fakultät: {attendance}</p>
         </StyledInfo>
      </Wrapper>
   );
};

UsersListItem.propTypes = {
   userData: PropTypes.shape({
      average: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      attendance: PropTypes.string,
   }),
};

export default UsersListItem;
