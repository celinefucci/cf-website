import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "../styles/palette.scss"
import BackButton from "../components/back"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactDetails = styled.div`
    // Padding = Top, Right, Bottom, Left
    margin-bottom: -15px;
    padding-left: 1.0875rem;
    padding-right: 1.0875rem;

    .heading-one {
        margin-top: 40px;
        max-width: 135px;
        margin-bottom: 15px;
    }

    .heading-two {
        margin-top: 60px;
        margin-bottom: 15px;
        max-width: 250px;
    }

    .heading-three {
        margin-top: 60px;
        max-width: 185px;
        margin-bottom: 0px;
    }

    .required {
      color: var(--blue-grey-three);
      font-family: var(--secondary-font);
      font-weight: normal;
      padding-bottom: 40px;
      margin-top: 10px;
    }

    h3 {
        //background-color: var(--purple-seven);
        color: var(--purple-six);
        font-size: 40px;
        font-family: var(--primary-font);
        //padding: 8px 8px;
     }

     a, span {
        color: var(--blue-grey-three);
        font-family: var(--primary-font);
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

     .tunes {
      font-family: var(--primary-font);
     }

    .spotify-button {
        color: var(--teal-six);
        background-color: transparent;
        border: 1px solid var(--teal-six);
        font-size: 16px;
        border-radius: 4px;
        padding: 12px 20px;
        margin-top: 25px;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.2s ease 0s;
        font-weight: bold;
        max-width: 100%;
    }

    .spotify-button:hover {
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

    hr {
      margin-top: 70px;
      max-width: 100%;
      height: 1px;
      border: 0;
      background-color: var(--blue-grey-eight);
    }


    // Media Queries
    @media (min-width: 800px) {
      width: 800px;
      margin-left: auto;
      margin-right: auto;

      .heading-one, .heading-two, .heading-three {
        max-width: 100%;
      }

      .spotify-button {
        display: block;
      }

    }

    

`

const ContactInfo = () => (
  // Make the a href a button tag?
  <ContactDetails>
    <Link to="/">
        <BackButton />
    </Link>

  <div className="flex-container">

    {/* Column 1 */}
    <div className="column-1">
      <h3 class="heading-one">get in touch</h3>
      <a href="https://www.linkedin.com/in/celinefucci/">LinkedIn</a>
      <span> | </span>
      <a href="https://github.com/celinefucci">GitHub</a>
      <span> | </span>
      <span>
        <a href="https://twitter.com/cfooch96">Twitter</a>
      </span>
      <div>
        or email me at {" "}
        <span>
          <a href="mailto:celinefucci@gmail.com" className="email">
            celinefucci@gmail.com
          </a>
        </span>
      </div>
      <hr />
    </div>

    {/* Column 2 */}
      <div className="column-2">
        <h3 class="heading-two">need some tunes?</h3>
        <div className="tunes">Music for designing, writing, coding, and the gym.</div>


        <Link to="/music/">
            <button className="spotify-button">
                View Mixtapes
                <FontAwesomeIcon
                icon={["fab", "spotify"]}
                size="lg"
                className="fa-fw spotify-icon"
                />
            </button>
        </Link>
        <hr />
      </div>

  </div>

  <h3 className="heading-three">ask me a question</h3>
  <h4 className="required">All fields are required.</h4>
  </ContactDetails>
)

export default ContactInfo
