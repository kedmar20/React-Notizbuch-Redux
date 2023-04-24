import { StyledButton } from "components/atoms/DeleteButton/DeleteButton.styles";
import { Title } from "components/atoms/Title/Title";
import styled from "styled-components";

export const Wrapper = styled.div`
   width: 400px;
   height: auto;
   transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(400px)")};

   transition: transform 0.6s ease-in-out;
   max-height: 700px;
   position: absolute;
   right: 0;
   top: 45%;
   background: white;
   border: 2px solid ${({ theme }) => theme.colors.darkGrey};
`;

export const WidgetHandler = styled.button`
   width: 120px;
   height: 30px;
   background-color: ${({ theme }) => theme.colors.darkGrey};
   transform: rotate(-90deg);
   position: absolute;
   left: -75px;
   border-radius: 8px 8px 0 0;
   top: 40px;
   color: white;
   border: none;
   cursor: pointer;
   padding: 0 0 21px 0;
`;

export const NotesWrapper = styled.div`
   max-height: 700px;
   overflow-y: scroll;
   padding: 40px 5px 40px 50px;
   display: flex;
   flex-direction: column;
   align-items: center;
   color: ${({ theme }) => theme.colors.darkGrey};
   ${Title} {
      color: ${({ theme }) => theme.colors.darkGrey};
      transform: scale(80%);
      width: 100%;
   }
   ${StyledButton} {
      background-color: ${({ theme }) => theme.colors.darkGrey};
      color: ${({ theme }) => theme.colors.lightGrey};
   }
   p {
      max-height: auto;
      font-size: 0.7rem;
   }
`;
