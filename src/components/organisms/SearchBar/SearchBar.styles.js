import styled from "styled-components";
import { Input } from "components/atoms/Input/Input";

export const SearchBarWrapper = styled.div`
   /* background-color: ${({ theme }) => theme.colors.white}; */
   border: 1px solid yellow;
   width: 80%;
   padding: 15px;
   height: 90px;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0 auto;
   margin-bottom: 60px;
   ${Input} {
      font-size: ${({ theme }) => theme.fontSize.xl};
      width: 100%;
      max-width: 350px;
      border: 2px solid ${({ theme }) => theme.colors.lightPurple};
   }
`;
