import styled from "styled-components";

export const Wrapper = styled.li`
   display: flex;
   align-items: center;
   position: relative;

   &:not(:last-child)::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: lightgrey;
   }
`;

export const StyledAverage = styled.div`
   width: 75px;
   height: 45px;
   padding: 5px 5px;
   border-radius: 8px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 1px;
   font-size: ${({ theme }) => theme.fontSize.s};
   color: ${({ theme }) => theme.colors.white};
   font-weight: bold;
   background: ${({ theme, value }) => {
      if (value > 3) return theme.colors.error;
      if (value > 2) return theme.colors.warning;
      if (value > 1) return theme.colors.success;
      return theme.colors.grey;
   }};
   p {
      /* margin-block-start: 0;
      margin-block-end: 0; */
      margin: 0;
   }
`;

export const StyledInfo = styled.div`
   padding: 25px 20px;

   p {
      margin: 0;
      color: ${({ theme }) => theme.colors.white};
   }

   p:first-child {
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: ${({ theme }) => theme.fontSize.l};
   }

   p:last-child {
      font-size: ${({ theme }) => theme.fontSize.m};
   }
`;
