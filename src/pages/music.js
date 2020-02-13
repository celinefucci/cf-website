import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import BackButton from "../components/back"
import TopButton from "../components/top"

import PlaylistCardOne from "../components/playlistcardone"
import PlaylistCardTwo from "../components/playlistcardtwo"


const MusicIntro = styled.p`
    padding-left: 1.0875rem;
    padding-right: 1.0875rem;
    margin-top: 40px;
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

    <Link to="/contact/" style={{ paddingLeft: `1.0875rem`, paddingRight: `1.0875rem` }}>
      <BackButton />
    </Link>

    <MusicIntro>listen & share</MusicIntro>
    <MusicSecondary>Click or tap on a card to begin.</MusicSecondary>

      <a href="https://open.spotify.com/playlist/2w2WVSPWNSZfmrPzxR4EK5?si=Lz4PpOc0RQ--bneKSfhA2Q">
        <PlaylistCardOne />
      </a>
      <a href="https://open.spotify.com/playlist/2JCbIgTWQJfUWMmU3Coz1Z?si=XEHN9urURMaqW_o5lexxUw">
        <PlaylistCardTwo />
      </a>

      <div style={{ paddingLeft: `1.0875rem`, paddingRight: `1.0875rem` }}>
        <TopButton />
      </div>

  </Layout>
)

export default MusicPage
