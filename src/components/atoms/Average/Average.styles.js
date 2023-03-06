import styled from "styled-components";
import { averageColor } from "./Average";

export const AverageStyle = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50px;
  background-color: ${({ theme }) => {
    return averageColor < 3
      ? theme.colors.success
      : averageColor < 4
      ? theme.colors.black
      : theme.colors.warning;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
`;

console.log(AverageStyle);
