import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
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

const MusicIntro = styled.p`
    padding-left: 1.0875rem;
    padding-right: 1.0875rem;
    margin-top: 50px;
    color: var(--purple-six);
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 8px;
`

const MusicSecondary = styled.p`
    font-size: 14px;
    padding-left: 1.0875rem;
    padding-right: 1.0875rem;
    margin-top: 0;
`

const MusicPage = () => (
  <Layout>

    <SEO title="Music" />
    <MusicIntro>listen & share</MusicIntro>
    <MusicSecondary>Click or tap on a card to begin.</MusicSecondary>

      <a href="https://open.spotify.com/playlist/2w2WVSPWNSZfmrPzxR4EK5?si=Lz4PpOc0RQ--bneKSfhA2Q">
        <CardWrapper>
          <h1>Best of EDM</h1>
          <span>DANCE</span>
          <span>POP</span>
          <span>GLOBAL</span>
          <p>The best electronic dance music tunes. Great to listen to at the gym or on a roadtrip.</p>
          <h3>FEATURING:</h3>

          <div>
            <FontAwesomeIcon icon="arrow-circle-right" size="sm" className="arrow-icon" />
            <p className="artist">Avicii</p>
          </div>
          <div>
            <FontAwesomeIcon icon="arrow-circle-right" size="sm" className="arrow-icon" />
            <p className="artist">Cash Cash</p>
          </div>
          <div>
            <FontAwesomeIcon icon="arrow-circle-right" size="sm" className="arrow-icon" />
            <p className="artist">Martin Garrix</p>
          </div>
          <div>
            <FontAwesomeIcon icon="arrow-circle-right" size="sm" className="arrow-icon" />
            <p className="artist">Kygo</p>
          </div>
        </CardWrapper>
      </a>
  </Layout>
)

export default MusicPage
