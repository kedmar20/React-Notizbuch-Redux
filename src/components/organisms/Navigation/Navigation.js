import React from "react";
import { Wrapper, SearchBar, StyledLink } from "./Navigation.styles";

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
      </Wrapper>
   );
};

export default Navigation;
