import styled from "styled-components";
import { StyledButton } from "components/atoms/DeleteButton/DeleteButton.styles";

export const NoteWrapper = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-bottom: 20px;

   h3,
   p {
      margin: auto;
      color: ${({ theme }) => theme.colors.darkGrey};
   }
`;

export const StyledDeleteButton = styled(StyledButton)`
   position: absolute;
   top: 15px;
   left: -44px;
`;
