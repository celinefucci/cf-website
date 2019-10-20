import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import NavWrapper from "../components/nav"

const ImgWrapper = styled.div`
  max-width: 100px;
  margin-bottom: 1.45rem;
`

const NavLine = styled.hr`
  margin-top: 21px;
  max-width: 100%;
  height: 1px;
  border: 0;
  background-color: var(--blue-grey-eight);
`

const IndexPage = () => (
  <Layout>
    <NavWrapper>
      <SEO title="Home" />
      <a href="http://people.sunyit.edu/~fuccic/">Portfolio</a>
      <ImgWrapper>
        <Image />
      </ImgWrapper>
      <Link to="/page-2/">Go to page 2</Link>
    </NavWrapper>
    <NavLine />
  </Layout>
)

export default IndexPage
