import React from "react"
import styled from "styled-components"
import "../styles/palette.scss"

const FooterWrapper = styled.footer`
  min-height: 17vh;

  margin: 0 auto;
  max-width: 960;
  padding: 0.9rem 1.0875rem;

  // Keep in mind vh issue on mobile - Kevin Powell video
  //min-height: 14vh;
  // display: flex;
  // flex-direction: column;

  display: flex;    
  flex-direction: row;
  justify-content: space-between;

`
const FooterText = styled.div`
  margin-top: 55px;
  color: var(--blue-grey-six);
  font-size: 12px;
  font-weight: 300;
`

const FooterQuery = styled.div`
  @media (min-width: 800px) {
    width: 800px;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }
`

const Footer = () => (
  <FooterQuery>
    <FooterWrapper>
      <FooterText>
        Celine Fucci © 2020 
      </FooterText>
    </FooterWrapper>
  </FooterQuery>
)

export default Footer