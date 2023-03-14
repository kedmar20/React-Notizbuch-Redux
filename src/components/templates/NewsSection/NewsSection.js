import { Button } from "components/atoms/Button/Button";
import React from "react";
import { NewsSectionHeader, Wrapper, TitleWrapper, ArticleWrapper } from "./NewsSection.styles";
import { ContentWrapper } from "./NewsSection.styles";

const dataMockApi = [
   {
      idNr: "1",
      title: "Veranstaltungen",
      category: "Gut informiert",
      content: `
         DO. 02.02.2023 - 13:48 UHR 
pädagogische Sommerakademie
von Do, 27.07.2023 bis So, 30.07.2023 
Alle Infos: www.freie-hochschule-stuttgart.de/sommerakademie
`,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Bronchioloalveolar_carcinoma%2C_mucinous_type.jpg/120px-Bronchioloalveolar_carcinoma%2C_mucinous_type.jpg",
      alt: "Pathologie",
      big: "",
   },
   {
      idNr: "2",
      title: "Title",
      category: "undercathegory",
      content:
         " Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Iran_Teller_makffm_Stadt217.jpg/130px-Iran_Teller_makffm_Stadt217.jpg",
      alt: "Wort der Woche",
      big: "isBig",
   },
   {
      idNr: "2",
      title: "Fachlehrer*in an Waldorfschulen",
      category: "Hochschulabschluss",
      content:
         " Es sei ein Glück, sich selbst zu verwirklichen – sagen zumindest viele, die ihr Studium zur/zum Waldorflehrer*in oder ihre Ausbildung zum/zur Fachlehrer*in bei uns machen. Und sie sind glücklich mit dem Beruf, der sie danach erwartet.Die Fachunterrichte, die meistens im Anschluss an den Hauptunterricht der Klassen- bzw. Oberstufenlehrer stattfinden, vervollständigen den täglichen Unterricht. Die Fachlehrer* innen unterrichten in Fächern, die im wöchentlichen Stundenplan regelmäßig auftauchen und entsprechend vertieft werden können: Eurythmie, Fremdsprachen, Gartenbau, Handarbeit, Musik, Sport und Werken. Je nach Vorbildung unterrichten die Fachlehrer* innen von der ersten Klasse bis zum Abitur. Es sei ein Glück, sich selbst zu verwirklichen – sagen zumindest viele, die ihr Studium zur/zum Waldorflehrer*in oder ihre Ausbildung zum/zur Fachlehrer*in bei uns machen. Und sie sind glücklich mit dem Beruf, der sie danach erwartet.Die Fachunterrichte, die meistens im Anschluss an den Hauptunterricht der Klassen- bzw. Oberstufenlehrer stattfinden, vervollständigen den täglichen Unterricht. Die Fachlehrer* innen unterrichten in Fächern, die im wöchentlichen Stundenplan regelmäßig auftauchen und entsprechend vertieft werden können: Eurythmie, Fremdsprachen, Gartenbau, Handarbeit, Musik, Sport und Werken. Je nach Vorbildung unterrichten die Fachlehrer* innen von der ersten Klasse bis zum Abitur.Es sei ein Glück, sich selbst zu verwirklichen – sagen zumindest viele, die ihr Studium zur/zum Waldorflehrer*in oder ihre Ausbildung zum/zur Fachlehrer*in bei uns machen. Und sie sind glücklich mit dem Beruf, der sie danach erwartet.Die Fachunterrichte, die meistens im Anschluss an den Hauptunterricht der Klassen- bzw. Oberstufenlehrer stattfinden, vervollständigen den täglichen Unterricht. Die Fachlehrer* innen unterrichten in Fächern, die im wöchentlichen Stundenplan regelmäßig auftauchen und entsprechend vertieft werden können: Eurythmie, Fremdsprachen, Gartenbau, Handarbeit, Musik, Sport und Werken. Je nach Vorbildung unterrichten die Fachlehrer* innen von der ersten Klasse bis zum Abitur.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Iran_Teller_makffm_Stadt217.jpg/130px-Iran_Teller_makffm_Stadt217.jpg",
      alt: "Wort der Woche",
      big: "isBig",
   },
];

const NewsSection = () => {
   //    const [{ title, category, content, img, alt }] = dataMockApi;
   return (
      <Wrapper>
         <NewsSectionHeader>Newsfeed der Universität</NewsSectionHeader>
         {dataMockApi.map(({ title, category, content, img, alt, big, idNr }) => (
            <ArticleWrapper key={idNr}>
               <TitleWrapper>
                  <h3>{title}</h3>
                  <p>{category}</p>
               </TitleWrapper>
               <ContentWrapper>
                  <p>{content}</p>
                  <img src={img} alt={alt} />
               </ContentWrapper>
               <Button isBig>knopfen</Button>
               {console.log(big)}
            </ArticleWrapper>
         ))}
      </Wrapper>
   );
};

export default NewsSection;
