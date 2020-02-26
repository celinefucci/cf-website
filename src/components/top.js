import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "../styles/palette.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const TopButton = styled.button`

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
    float: right;
    margin-top: 20px;
    
    // TODO: dotted border
    #top {
        outline: none !important;
    }
`

const TopQuery = styled.div`
  @media (min-width: 575px) {
    width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
`

const Top = () => (
    <a href="#top">
        <TopQuery>
            <TopButton>
                <FontAwesomeIcon icon={['fas', 'arrow-up']} size="md" className="fa-fw" />
            </TopButton>
        </TopQuery>
    </a>
)

export default Top