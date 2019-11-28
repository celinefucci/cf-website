import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "../styles/palette.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactDetails = styled.div`
    // // Padding = Top, Right, Bottom, Left
    padding-left: 1.0875rem;

    .heading-one {
        margin-top: 30px;
        max-width: 135px;
    }

    .heading-two {
        margin-top: 50px;
        max-width: 180px;
    }

    .heading-three {
        margin-top: 50px;
        max-width: 185px;
    }

    h3 {
        background-color: var(--purple-seven);
        color: var(--blue-grey-nine);
        font-size: 16px;
        padding: 8px 8px;
     }

     span {
         font-family: var(--secondary-font);
         color: var(--purple-six);
     }

     .spotify {
        display: inline-block;
        color: var(--teal-nine);
        background-color: var(--teal-seven);
        border-radius: 50%;
        padding: 8px;
        font-size: 24px;
     }
`

const ContactInfo = () => (
    // Make the a href a button tag?
    <ContactDetails>
         <h3 class="heading-one">GET IN TOUCH</h3>
         <a href="https://www.linkedin.com/in/celinefucci/"><span>LinkedIn | </span></a>
         <a href="https://github.com/celinefucci"><span>GitHub |</span></a>
         <a href="https://twitter.com/cfooch96"><span> Twitter |</span></a>
         <a href="mailto:celinefucci@gmail.com"><span> Email</span></a>
         
         <h3 class="heading-two">NEED SOME TUNES?</h3>
         <a href="https://open.spotify.com/user/cfooch?si=exhrNnH4SFiWKmVTJGZ78A" className="spotify"><FontAwesomeIcon icon={['fab', 'spotify']} size="md" className="fa-fw" /></a>
         
         <h3 class="heading-three">ASK ME A QUESTION</h3>
    </ContactDetails>
)

export default ContactInfo
