import React, { useState, useEffect } from "react";
import { users as MKusersData } from "data/users";
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { StyledList, StyledTitle, Wrapper } from "./UsersList.styles";
import FormField from "components/molecules/FormField/FormField";
import { Button } from "components/atoms/Button/Button";

const initialFormState = {
  name: "",
  attendance: "",
  average: "",
};

const UsersList = () => {
  const [usersMK, setUsers] = useState(MKusersData); //początkowe zaczytanie danych z jakiegoś źródła; egal jakiego
  const [formValues, setFormValues] = useState(initialFormState); // control component / przekazujemy: 1.wartośćDoInputu (początkowo obiekt kluczy z pustymi wartościami) poprzez funkcję nr 1 czyli w tym przypadku 'formValues' jako props niżej do dziecka gdzie wyświetla się input czyli do 'FormField' / i nastepnie jesli nastąpi jakaś zmiana (event 'onChange') to poprze funkcję nr 2 czyli w tym przypadku 'setFormValues' od dziecka do Stanu dostajemy nową wartość / i tak wkołomacieju

  const deleteUser = (name) => {
    const filteredUsers = usersMK.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues, //zaczytanie aktualnego stanu
      [e.target.name]: e.target.value, //jeśli odpala się event onChange to klucz o takim name przyjmuje nową wartość
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault(); //zapobiega przeładowanu strony
    const newUser = {
      name: formValues.name,
      attendanec: formValues.attendance,
      average: formValues.average,
    };
    setUsers([newUser, ...usersMK]); //ustawiamy nową listę userów
    setFormValues(initialFormState);
  };

  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        {" "}
        {/*//czyli jeśli dojdzie do submit to ma się wykonać funkcja*/}
        <StyledTitle>Neuen Studenten hinzufügen:</StyledTitle>
        <FormField
          label="Nachname:"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <FormField
          label="Teilnahmefrequenz:"
          id="attendance"
          name="attendance"
          value={formValues.attendance}
          onChange={handleInputChange}
        />
        <FormField
          label="Durchschnitt:"
          id="average"
          name="average"
          value={formValues.average}
          onChange={handleInputChange}
        />
        <Button type="submit">Add</Button>
      </Wrapper>
      <Wrapper>
        <StyledTitle>Studentenliste:</StyledTitle>
        <StyledList>
          {usersMK.map((userDataMK) => (
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

export default UsersList;
