import styled from "styled-components";

export const Wrapper = styled.div`
   /* background-color: ${({ theme }) => theme.colors.lightGrey}; */
   background-color: #4a465f;

   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;
   grid-row: 2/3;
   grid-column: 2/3;

   border-right: 1px solid ${({ theme }) => theme.colors.lightPurple};
`;
