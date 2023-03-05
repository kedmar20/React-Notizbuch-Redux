import styled from "styled-components";

export const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 50px;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    stroke: blue;
    width: 100%;
    height: 100%;
  }
`;
