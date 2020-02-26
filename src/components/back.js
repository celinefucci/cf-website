import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "../styles/palette.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const BackButton = styled.button`

    * {
        box-sizing: border-box;
    }

    background-color: var(--purple-nine);
    color: var(--purple-six);
    font-size: 14px;
    border-radius: 50%;
    border: none;
    padding: 10px;
    cursor: pointer;
    margin-top: 20px;

    @media (min-width: 575px) {
       // max-width: 700px;
    }

`

const BackQuery = styled.div`
  @media (min-width: 575px) {
    width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
`

const Back = () => (
    <BackQuery>
        <BackButton>
            <FontAwesomeIcon icon={['fas', 'arrow-left']} size="md" className="fa-fw" />
        </BackButton>
    </BackQuery>
)

export default Back