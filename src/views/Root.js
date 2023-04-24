import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import { Wrapper } from "./Root.styles";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import Notes from "views/Notes";
import { Provider } from "react-redux";
import { store } from "store";
//
//

const Root = () => {
   return (
      <Provider store={store}>
         <Router>
            <ThemeProvider theme={theme}>
               <GlobalStyle />
               <MainTemplate>
                  <Wrapper>
                     <Routes>
                        <Route path="/" exact element={<Navigate to="/notes" />}></Route>
                        <Route path="/notes" element={<Notes />} />
                     </Routes>
                  </Wrapper>
               </MainTemplate>
            </ThemeProvider>
         </Router>
      </Provider>
   );
};

export default Root;
