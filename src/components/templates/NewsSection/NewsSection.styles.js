import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import styled from "styled-components";

export const Wrapper = styled.div`
   grid-row: 2/3;
   grid-column: 3/4;
   color: ${({ theme }) => theme.colors.white};
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   padding: 40px;
   overflow-y: scroll;
`;

export const NewsSectionHeader = styled.h2`
   margin-right: auto;
`;

export const ArticleWrapper = styled(ViewWrapper)`
   margin: 20px 0;
   width: 100%;
   max-width: unset;
   border-radius: 10px;
   color: ${({ theme }) => theme.colors.black};
   font-size: ${({ theme }) => theme.fontSize.m};
   padding: 20px;

   p {
      line-height: 1.6;
   }
`;

export const TitleWrapper = styled.div`
   h3 {
      font-size: ${({ theme }) => theme.fontSize.xl};
   }
   p {
      font-size: ${({ theme }) => theme.fontSize.m};
      margin-bottom: 5px;
   }
`;

export const ContentWrapper = styled.div`
   display: flex;
   align-items: flex-start;

   img {
      max-width: 300px;
      object-fit: contain;
      margin-left: 25px;
   }
`;
