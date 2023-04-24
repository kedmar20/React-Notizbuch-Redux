import styled from "styled-components";

export const StyledButton = styled.button`
   width: 22px;
   height: 22px;
   margin: 0 10px;
   background-color: ${({ theme }) => theme.colors.lightGrey};
   border-radius: 50px;
   border: none;
   color: ${({ theme }) => theme.colors.darkGrey};
   font-weight: 700;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;

   svg {
      width: 100%;
      height: 100%;
   }
`;
