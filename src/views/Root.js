import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import { Wrapper } from "./Root.styles";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import AddUser from "views/AddUser";
import Dashboard from "views/Dashboard";
//
//

const Root = () => {
   return (
      <Router>
         {/* //zapewnia dla całej aplikacji możliwość routingu czyli przemieszczania sie pomiędzy stronami */}
         <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MainTemplate>
               <Wrapper>
                  <Routes>
                     <Route path="/" exact element={<Navigate to="/group" />}></Route>
                     <Route path="add-user" element={<AddUser />}></Route>
                     <Route path="/group" exact element={<Dashboard />}>
                        <Route path=":id?" element={<Dashboard />} />
                     </Route>
                  </Routes>
               </Wrapper>
            </MainTemplate>
         </ThemeProvider>
      </Router>
   );
};

export default Root;
