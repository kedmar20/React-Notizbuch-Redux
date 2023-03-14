import React from "react";
import { Wrapper, StyledLink, StatusInfo } from "./Navigation.styles";
import { SearchBar } from "../SearchBar/SearchBar";

const Navigation = () => {
   return (
      <Wrapper>
         <SearchBar />
         <StyledLink to="/">Übersicht</StyledLink>
         <StyledLink to="/add-user">Studenten Hinzufügen</StyledLink>
         <StyledLink to="/fakult">Fakultäten</StyledLink>
         <StyledLink to="/semester">Semester</StyledLink>
         <StyledLink to="/einstellungen">Einstellungen</StyledLink>
         <StyledLink to="/abmelden">Abmelden</StyledLink>
         <StatusInfo>
            <p>Hallo Simon!</p>
            <h4>Du bist angemeldet.</h4>
         </StatusInfo>
      </Wrapper>
   );
};

export default Navigation;
