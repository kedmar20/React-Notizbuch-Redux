import React from "react";
import { Wrapper, StyledLink, StatusInfo } from "./Navigation.styles";

const Navigation = () => {
   return (
      <Wrapper>
         <StyledLink to="/notes">Notizen</StyledLink>
         <StyledLink to="/abmelden">Abmelden</StyledLink>
         <StatusInfo>
            <p>Hallo Simon!</p>
            <h4>Du bist angemeldet.</h4>
         </StatusInfo>
      </Wrapper>
   );
};

export default Navigation;
