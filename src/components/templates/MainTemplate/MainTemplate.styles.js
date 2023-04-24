import styled from "styled-components";

export const Wrapper = styled.div`
   width: 100%;
   height: 100vh;
   overflow: hidden;
   margin: 0px;
   padding: 0px;
   display: grid;
   grid-template-columns: calc(50px+1fr) 1fr;
   grid-template-rows: 90px 1fr;
   background-color: #4a465f;
   position: relative;

   /* background-color: #4a465f; */
`;
