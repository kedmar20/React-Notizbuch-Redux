import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   border-right: 1px solid ${({ theme }) => theme.colors.lightPurple};
   justify-content: flex-start;
   padding: 30px 0;
   position: relative;
   /* background-color: ${({ theme }) => theme.colors.white}; */
   background-color: #4a465f;
   grid-row: 2/3;
   grid-column: 1/2;
`;

export const SearchBar = styled.div`
   background-color: ${({ theme }) => theme.colors.white};
   width: 80%;
   padding: 15px;
   height: 90px;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0 auto;
   margin-bottom: 60px;
`;

export const StyledLink = styled(NavLink).attrs({
   className: "active-link",
})`
   font-weight: bold;
   text-decoration: none;
   color: ${({ theme }) => theme.colors.darkGrey};
   text-align: right;
   margin: 15px 20px 15px auto;
   position: relative;

   &.active {
      color: ${({ theme }) => theme.colors.lightPurple};
      &::after {
         opacity: 1;
         width: 10px;
      }
   }

   &::after {
      content: "";
      opacity: 0;
      transition: all 0.4s ease-in-out;
      position: absolute;
      width: 20px;
      height: 100%;
      transform: translateY(-50%);
      top: 50%;
      right: -20px;
      background-color: ${({ theme }) => theme.colors.lightPurple};
   }
`;
