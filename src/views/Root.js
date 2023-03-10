import React, { useState } from "react";
import { users as MKusersData } from "data/users";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import { Wrapper } from "./Root.styles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import AddUser from "./AddUser";
import Dashboard from "./Dashboardd";
//
//
const initialFormState = {
  name: "",
  attendance: "",
  average: "",
};
//
//
//
const Root = () => {
  const [users, setUsers] = useState(MKusersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendanec: formValues.attendance,
      average: formValues.average,
    };
    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  };

  return (
    <Router>
      {/* //zapewnia dla całej aplikacji możliwość routingu czyli przemieszczania sie pomiędzy stronami */}
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route
                path="add-user"
                element={
                  <AddUser
                    handleAddUser={handleAddUser}
                    handleInputChange={handleInputChange}
                    formValues={formValues}
                  />
                }
              ></Route>
              <Route
                path="/"
                exact
                element={<Dashboard deleteUser={deleteUser} users={users} />}
              ></Route>
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
