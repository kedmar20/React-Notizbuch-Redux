import React from "react";
import { users } from "data/users";
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { StyledList, Wrapper } from "./UsersList.styles";
import Button from "components/atoms/Button/Button";

// const UsersList = () => (
//   <Wrapper>
//     <StyledList>
//       {users.map((userData, i) => (
//         <UsersListItem index={i} key={userData.name} userData={userData} />
//       ))}
//     </StyledList>
//   </Wrapper>
// );

//Klasy, rys historyczny dot stanu:
class UsersList extends React.Component {
  state = {
    isUsersList: true,
  };

  toggleListTitle = () => {
    this.setState((prevState) => ({
      isUsersList: !prevState.isUsersList,
    }));
  };

  render() {
    return (
      <Wrapper>
        <h1>{this.state.isUsersList ? `User's list` : "Students list"}</h1>
        <button onClick={this.toggleListTitle}>Change title</button>
        <StyledList>
          {users.map((userData, i) => (
            <UsersListItem index={i} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    );
  }
}

export default UsersList;
