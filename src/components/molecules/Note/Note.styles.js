import styled from "styled-components";
import { StyledButton } from "components/atoms/DeleteButton/DeleteButton.styles";

export const NoteWrapper = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   margin-bottom: 20px;

   h3,
   p {
      margin: 0;
      color: ${({ theme }) => theme.colors.darkGrey};
   }
`;

export const StyledDeleteButton = styled(StyledButton)`
   position: absolute;
   top: 20px;
   left: -40px;
`;
