import React from "react"
import styled from "styled-components"
import "../styles/palette.scss"

const FooterWrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;

  // Keep in mind vh issue on mobile - Kevin Powell video
  min-height: 100vh;
  display: flex;
  flex-direction: column;

`
const FooterText = styled.footer`
  margin-top: auto;
  color: var(--blue-grey-six);
  font-size: 12px;
  font-weight: 300;
`

const Footer = () => (
  <FooterWrapper>
    <FooterText>
      © Celine Fucci. Made in New York.  
      {` `}
    </FooterText>
  </FooterWrapper>
)

export default Footer