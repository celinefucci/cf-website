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
    margin-top: 10px;
    
    // TODO: dotted border
    #top {
        outline: none !important;
    }

`

const Top = () => (
    <a href="#top">
        <TopButton className="hi">
            <FontAwesomeIcon icon={['fas', 'arrow-up']} size="md" className="fa-fw" />
        </TopButton>
    </a>
)

export default Top