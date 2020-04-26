import { createGlobalStyle } from "styled-components"
import "../styles/palette.scss"

export const GlobalStyle = createGlobalStyle`
    html {
        @media (min-width: 800px) {
            width: 800px;
            margin-left: auto;
            margin-right: auto;
        }
    }    

    * {
            box-sizing: border-box;
    }

    body {
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