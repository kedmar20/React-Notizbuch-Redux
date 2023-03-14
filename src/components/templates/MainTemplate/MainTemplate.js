import React from "react";
import { Wrapper } from "./MainTemplate.styles";
import Navigation from "components/organisms/Navigation/Navigation";
import styled from "styled-components";
import { ReactComponent as LogoBlue } from "assets/logos/logo-blue.svg";
import NewsSection from "../NewsSection/NewsSection";

const Logo = styled.div`
   grid-row: 1/2;
   grid-column: 1/3;
   padding-left: 30px;
   display: flex;
   justify-content: start;
   align-items: center;
   background-color: ${({ theme }) => theme.colors.lightPurple};

   #logoblue {
      height: 70%;
   }
`;

const Auth = styled.div`
   grid-row: 1/2;
   grid-column: 3/4;

   background-color: ${({ theme }) => theme.colors.lightPurple};
`;

const MainTemplate = ({ children }) => {
   return (
      <Wrapper>
         <Logo>
            <LogoBlue id="logoblue" />
         </Logo>
         <Navigation />

         {children}
         <Auth></Auth>
         <NewsSection />
      </Wrapper>
   );
};
export default MainTemplate;
