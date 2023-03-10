import React from "react";
import { Wrapper, Logo, StyledLink } from "./Navigation.styles";

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink to="/">Übersicht</StyledLink>
      <StyledLink to="/add-user">StudenHinzufügen</StyledLink>
      <StyledLink to="/">Einstelungen</StyledLink>
      <StyledLink to="/">Abmelden</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
