import React from "react"
import styled from "styled-components"
import "../styles/palette.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SocialWrapper = styled.div`

    * {
        box-sizing: border-box;
    }

    display: flex;
    justify-content: space-evenly;

    
    .social-icon {
        display: inline-block;
        //margin-bottom: 20px;
        color: var(--purple-six);
        background-color: var(--purple-nine);
        border-radius: 50%;
        padding: 8px;
        //font-size: 16px;
    }

`

const Social = () => (
  <SocialWrapper>
    <a href="https://www.linkedin.com/in/celinefucci/" className="social-icon"><FontAwesomeIcon icon={['fab', 'linkedin-in']} size="md" className="fa-fw" /></a>
    <a href="https://github.com/celinefucci" className="social-icon"><FontAwesomeIcon icon={['fab', 'github']} size="md" className="fa-fw" /></a>
    <a href="https://twitter.com/cfooch96" className="social-icon"><FontAwesomeIcon icon={['fab', 'twitter']} size="md" className="fa-fw" /></a>
    <a href="mailto:celinefucci@gmail.com" className="social-icon"><FontAwesomeIcon icon={['far', 'envelope']} size="md" className="fa-fw" /></a>
  </SocialWrapper>
)

export default Social