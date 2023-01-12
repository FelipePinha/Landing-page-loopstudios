import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.5rem;
        font-family: 'Alata', sans-serif;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.white};
    }
`