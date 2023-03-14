import styled from "styled-components";

export const Button = styled.button`
   margin: 15px 10px;
   padding: ${({ isBig }) => (isBig ? "10px 30px" : "4px 20px")};
   font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.l : fontSize.s)};
   background-color: ${({ theme }) => theme.colors.lightPurple};
   border-radius: 20px;
   border: none;
   font-weight: bold;
   color: ${({ theme }) => theme.colors.darkGrey};
   cursor: pointer;
`;
