import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "../styles/palette.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactDetails = styled.div`
    // Padding = Top, Right, Bottom, Left
    margin-bottom: -15px;
    padding-left: 1.0875rem;
    padding-right: 1.0875rem;

    .heading-one {
        margin-top: 30px;
        max-width: 135px;
        margin-bottom: 15px;
    }

    .heading-two {
        margin-top: 75px;
        margin-bottom: 15px;
        max-width: 250px;
    }

    .heading-three {
        margin-top: 75px;
        max-width: 185px;
    }

    h3 {
        //background-color: var(--purple-seven);
        color: var(--purple-six);
        font-size: 40px;
        //padding: 8px 8px;
     }

     a, span {
        color: var(--blue-grey-three);
        transition: all 0.2s ease 0s;
     }

     a:hover {
        color: var(--blue-grey-five);
        transition: all 0.2s ease 0s;
     }

     div {
         color: var(--blue-grey-three);
         font-family: var(--secondary-font);
         margin-top: 20px;
     }
     
     .email {
        color: var(--blue-grey-three);
        text-decoration: none;
        border-bottom: 1px solid var(--blue-grey-three);
        padding-bottom: 5px;
        transition: all 0.2s ease 0s;
     }

     .email:hover {
         color: var(--blue-grey-five);
         border-bottom: 1px solid var(--blue-grey-five);
         transition: all 0.2s ease 0s;
     }

    button {
        color: var(--teal-six);
        background-color: transparent;
        border: 1px solid var(--teal-six);
        font-size: 16px;
        border-radius: 4px;
        padding: 12px 20px;
        margin-top: 10px;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.2s ease 0s;
        font-weight: bold;
        width: 100%;
    }

    button:hover {
        color: var(--teal-nine);
        background-color: var(--teal-six);
        //border: none;
    }

    .spotify-button:hover {
        .spotify-icon {
          transition: all 0.2s ease 0s;
        }
      }
  
      .spotify-icon {
        transition: all 0.2s ease 0s;
        margin-left: 5px;
      }
`

const ContactInfo = () => (
  // Make the a href a button tag?
  <ContactDetails>
    <h3 class="heading-one">get in touch</h3>
    <a href="https://www.linkedin.com/in/celinefucci/">LinkedIn</a>
    <span> | </span>
    <a href="https://github.com/celinefucci">GitHub</a>
    <span> | </span>
    <span>
      <a href="https://twitter.com/cfooch96">Twitter</a>
    </span>
    <div>
      or email me at{" "}
      <span>
        <a href="mailto:celinefucci@gmail.com" className="email">
          celinefucci@gmail.com
        </a>
      </span>
    </div>

    <h3 class="heading-two">need some tunes?</h3>
    <span>Music for designing, writing, coding, and gym time.</span>

    <Link to="/music/">
        <button className="spotify-button">
            View Playlists
            <FontAwesomeIcon
            icon={["fab", "spotify"]}
            size="lg"
            className="fa-fw spotify-icon"
            />
        </button>
    </Link>

    <h3 class="heading-three">ask me a question</h3>
  </ContactDetails>
)

export default ContactInfo
