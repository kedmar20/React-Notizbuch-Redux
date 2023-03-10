import React from "react";
import { Wrapper, Logo, StyledLink } from "./Navigation.styles";
import { ReactComponent as LogoBlue } from "assets/logos/logo-blue.svg";

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <LogoBlue />
      </Logo>
      <StyledLink to="/">Übersicht</StyledLink>
      <StyledLink to="/add-user">StudenHinzufügen</StyledLink>
      <StyledLink to="/einstelungen">Einstelungen</StyledLink>
      <StyledLink to="/abmelden">Abmelden</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
