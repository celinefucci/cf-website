import React from "react"
import styled from "styled-components"
import "../styles/palette.scss"

const FooterWrapper = styled.footer`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`

const Footer = () => (
  <FooterWrapper>
      © {new Date().getFullYear()}, Made in New York  
      {` `}
  </FooterWrapper>
)

export default Footer