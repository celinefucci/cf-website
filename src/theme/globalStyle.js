import { createGlobalStyle } from "styled-components"
import "../styles/palette.scss"

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0;
        font-family: var(--primary-font);
        background-color: var(--blue-grey-nine);
    }

    a {
        text-decoration: none;
    }

    ul {
        margin: 0 auto;
        list-style-type: none;
    }
`