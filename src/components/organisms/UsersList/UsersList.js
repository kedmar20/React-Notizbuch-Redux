import React, { useState, useEffect } from "react"; //import 2 hooków
import { users as usersData } from "data/users"; //zmieniamy nazwę consta aby nazywał się jakoś inaczej
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { StyledList, Wrapper } from "./UsersList.styles";

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: "Error" });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState(usersData); // stan początkowy + destrukturyzacja tablicy: const users=useState[0] oraz const setUsers=useState[1]
  const [isLoading, setLoadingState] = useState([]); // jak wyżej

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  //  mockAPI().then(data=>{
  //         this.setState({isLoading: false})  // i zaraz po załdowaniu danych zmieniamy tekst na tytuł 'UserList'
  //         this.setState({users:data})
  //     }).catch(err=>console.log(err))

  return (
    <Wrapper>
      <h1>{isLoading ? "Loading..." : "Users List"}</h1>
      {/* //tu wyświetlamy tekst 'Loading' podczas ładowania lub tytuł po załadowaniu */}
      <StyledList>
        {users.map((userData) => (
          <UsersListItem
            deleteUser={deleteUser}
            key={userData.name}
            userData={userData}
          />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
