import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

//import NavWrapper from "../components/nav"

const NavLine = styled.hr`
  margin-top: 21px;
  max-width: 100%;
  height: 1px;
  border: 0;
  background-color: var(--blue-grey-eight);
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <NavLine />
  </Layout>
)

export default IndexPage
