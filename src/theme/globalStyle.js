import { createGlobalStyle } from "styled-components"
import "../styles/palette.scss"

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        font-family: var(--font-one);
    }

    a {
        text-decoration: none;
    }

    ul {
        margin: 0 auto;
        list-style-type: none;
    }
`