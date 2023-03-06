import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

html {
    box-sizing: border-box;
}

*, *::after, *::before {
    box-sizing: inherit;
    /* border: 2px solid blue; */
}

body {
    font-family: 'Montserrat', sans-serif;
}

a, button {
    font-family: 'Montserrat', sans-serif;
}

`;
