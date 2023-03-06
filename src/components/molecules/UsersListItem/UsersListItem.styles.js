import styled from "styled-components";
// import { averageColor } from "./UsersListItem";

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  // border: 1px solid red;
  margin-bottom: 10px;
  padding-left: 5px;
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => {
      return theme.colors.black;
    }};
    /* background-color: ${(props) => props.theme.colors.grey}; */
  }
`;

// export const AverageStyle = styled.div`
//   width: 34px;
//   height: 34px;
//   border-radius: 50px;
//   background-color: ${({ theme }) => {
//     return averageColor < 3
//       ? theme.colors.success
//       : averageColor < 4
//       ? theme.colors.black
//       : theme.colors.warning;
//   }};
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
