import React from "react"
import styled from "styled-components"
import "../styles/palette.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const CardWrapper = styled.div`

    border-radius: 4px;
    max-width: 300px;
    margin: 10% auto;
    padding: 34px;
    cursor: pointer;
    box-shadow: 0 4px 6px hsla(0, 0%, 0%, .1);
    color: var(--purple-six);
    background-color: var(--purple-nine);
    padding-left: 15px;
    padding-top: 5px;

    h1 {
      font-size: 30px;
      margin-bottom: 10px;
    }

    span {
      border-radius: 50px;
      padding-right: 12px;
      padding-left: 12px;
      padding-top: 5px;
      padding-bottom: 5px;

      background-color: var(--blue-grey-two);
      color: var(--blue-grey-ten);
      font-size: 10px;
      font-weight: bold;
      letter-spacing: .13em;
      margin-right: 10px;
    }

    p {
      font-size: 14px;
      color: var(--blue-grey-three);
      line-height: 1.5;
    }

    .arrow-icon {
      color: var(--blue-grey-three);
    }

    .artist {
      display: inline;
      padding-left: 5px;
      font-size: 12px;
      line-height: 2.0;
      color: var(--blue-grey-two);
    }

    h3 {
      //color: var(--blue-grey-two);
      letter-spacing: .05em;
      margin-bottom: 8px;
      margin-top: 35px;
    }
`

const Playlist = () => (
  <CardWrapper>
    <h1>Little Bit of Everything</h1>
    <span>ALTERNATIVE</span>
    <span>CLASSICS</span>
    <p>A combination of different genres, from classics to remixes</p>
    
    <h3>FEATURING:</h3>

    <div>
    <FontAwesomeIcon icon="compact-disc" size="sm" className="arrow-icon" />
    <p className="artist">Maggie Rogers</p>
    </div>

    <div>
    <FontAwesomeIcon icon="compact-disc" size="sm" className="arrow-icon" />
    <p className="artist">Labrinth</p>
    </div>

    <div>
    <FontAwesomeIcon icon="compact-disc" size="sm" className="arrow-icon" />
    <p className="artist">DJ Snake</p>
    </div>

    <div>
    <FontAwesomeIcon icon="compact-disc" size="sm" className="arrow-icon" />
    <p className="artist">The Who</p>
    </div>
  </CardWrapper>
)

export default Playlist