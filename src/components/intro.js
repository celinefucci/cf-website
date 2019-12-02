import React from "react"
import styled from "styled-components"
import "../styles/palette.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const IntroText = styled.div`
    text-align: center;
    padding-top: 80px;

    // h1 {
    //     background-color: var(--purple-seven);
    //     color: var(--blue-grey-nine);
    //     font-size: 16px;
    //     padding: 8px 8px;

    //     margin-top: 30px;
    //     max-width: 135px;
    //  }

     h1 {
        display: inline;
        position: relative;
        font-size: 40px;
        letter-spacing: 3px;
        //color: var(--purple-six); 
        color: var(--light-blue-seven); 
    }
    
    h1:after {
        content: "I'm Celine";
        position: absolute; left: -2px; top: 2px;
        //color: rgba(255,0,0,0.5); 
        //color: var(--teal-seven);  
        color: var(--purple-six);
    }

    h4 {
        font-family: var(--secondary-font);
    }
`

const Intro = () => (
    <IntroText>
        <h1>I'm Celine</h1>
        <h4>UI Designer & Technologist</h4>
        {/* <p>Through my work, I strive to help others, learn new things every day, and be a productive asset to a team</p> */}
    </IntroText>
)

export default Intro