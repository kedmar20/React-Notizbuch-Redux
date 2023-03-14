import { Button } from "components/atoms/Button/Button";
import React, { useState, useEffect } from "react";
import { ContentWrapper, NewsSectionHeader, Wrapper, TitleWrapper, ArticleWrapper } from "./NewsSection.styles";
import axios from "axios";

export const query = `
         {
          allArticles {
            id
            title
            category
            content
            image {
              url
            }
          }
        }
      `;

const NewsSection = () => {
   const [articles, setArticles] = useState([]);
   const [error, setError] = useState("");

   //

   useEffect(() => {
      axios
         .post(
            "https://graphql.datocms.com/",
            {
               query,
            },
            {
               headers: {
                  authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
                  //   authorization: `Bearer ${API_TOKEN}`,
               },
            }
         )
         .then(({ data: { data } }) => {
            setArticles(data.allArticles);
         })
         .catch(() => {
            setError(`Sorry, wir konnten keine Artikel für Sie laden`);
         });
   }, []);

   return (
      <Wrapper>
         <NewsSectionHeader>Newsfeed der Universität</NewsSectionHeader>
         {articles.map(({ title, category, content, image = null, alt, big, idNr }) => (
            <ArticleWrapper key={idNr}>
               <TitleWrapper>
                  <h3>{title}</h3>
                  <p>{category}</p>
               </TitleWrapper>
               <ContentWrapper>
                  <p>{content}</p>
                  <img src={image.url} alt={alt} />
               </ContentWrapper>
               <Button isBig>knopfen</Button>
               {console.log(big)}
            </ArticleWrapper>
         ))}
      </Wrapper>
   );
};

export default NewsSection;
