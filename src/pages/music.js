import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PlaylistCardOne from "../components/playlistcardone"
import PlaylistCardTwo from "../components/playlistcardtwo"


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

const Line = styled.hr`
  margin-top: 70px;
  max-width: 90%;
  height: 1px;
  border: 0;
  background-color: var(--blue-grey-eight);
`

const FavoriteSongs = styled.ol`
 
  color: var(--blue-grey-three);
  font-family: var(--secondary-font);
  line-height: 1.8;
  margin-left: 1.0875rem;
  margin-right: 1.0875rem;

  li a {
    color: var(--blue-grey-three);
    text-decoration: none;
    border-bottom: 2px solid var(--purple-six);
    max-width: 130px;
    font-family: var(--secondary-font);
    transition: all 0.2s ease 0s;
  }

  li a:hover {
    color: var(--purple-six);
    transition: all 0.2s ease 0s;
  }
`

const MusicPage = () => (
  <Layout>

    <SEO title="Music" />
    <MusicIntro>listen & share</MusicIntro>
    <MusicSecondary>Click or tap on a card to begin.</MusicSecondary>

      <a href="https://open.spotify.com/playlist/2w2WVSPWNSZfmrPzxR4EK5?si=Lz4PpOc0RQ--bneKSfhA2Q">
        <PlaylistCardOne />
      </a>
      <a href="https://open.spotify.com/playlist/2JCbIgTWQJfUWMmU3Coz1Z?si=XEHN9urURMaqW_o5lexxUw">
        <PlaylistCardTwo />
      </a>
      <Line />
      <MusicIntro>january top 5</MusicIntro>

      <FavoriteSongs>
        <li><a href="https://open.spotify.com/track/1QireoxwJEQNwVv1eT36mx?si=XHIcQKyHS-OWkZ0fnoWE2A">A Brighter Love - St. Lucia</a></li>
        <li><a href="https://open.spotify.com/track/5tuOGRYPjh5lV6M5zbNRNH?si=WRJrkoquSjufjE7Hqg-crA">Let Me Take You There - Max Styler</a></li>
        <li><a href="https://open.spotify.com/track/1E9Vdzjt5VVWfCah9x8mIn?si=JSCpXSzQQDKMcyenfNdvWQ">Walls - Sultan + Shepard</a></li>
        <li><a href="https://open.spotify.com/track/4EFEbgsvOK9GaX5fEUoCpm?si=aMhA95whQd6IwzjG1CC1WQ">NATURE - Elly Duhé</a></li>
        <li><a href="https://open.spotify.com/track/1oW9LQ9KyFZ6rihgDbn14z?si=yWSRDf4dRWib0g5OPrI6og">All Around the World - Matoma</a></li>
      </FavoriteSongs>
      
      
   
  </Layout>
)

export default MusicPage
