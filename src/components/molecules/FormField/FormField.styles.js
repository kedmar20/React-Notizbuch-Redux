import { Label } from "components/atoms/Label/Label";
import { Input } from "components/atoms/Input/Input";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 220px;
  /* height: 55px; */
  /* margin: auto; */
  padding: 15px 0px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  /* border-radius: 10px; */
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  /* align-items: center; */
  gap: 5px;
  ${Label} {
    //to jest CZAD!!!: jesli wewn naszego styled-component jest inny jak tutaj 'Label' to możemy się odnieść bezpośrednio do niego!!!
    /* color: red; */
    margin: 11px 18px;
  }
  ${Input} {
    margin-left: 7px;
  }
`;
