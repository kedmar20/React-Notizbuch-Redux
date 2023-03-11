import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import { Wrapper } from "./Root.styles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import AddUser from "views/AddUser";
import Dashboard from "views/Dashboard";
import UsersProvider from "providers/UsersProvider";
//
//

//
//

const Root = () => {
   return (
      <Router>
         {/* //zapewnia dla całej aplikacji możliwość routingu czyli przemieszczania sie pomiędzy stronami */}
         <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MainTemplate>
               <UsersProvider>
                  <Wrapper>
                     <Routes>
                        <Route path="add-user" element={<AddUser />}></Route>
                        <Route path="/" exact element={<Dashboard />}></Route>
                     </Routes>
                  </Wrapper>
               </UsersProvider>
            </MainTemplate>
         </ThemeProvider>
      </Router>
   );
};

export default Root;
