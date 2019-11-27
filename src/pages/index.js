import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

// TODO
import Nav from "../components/nav"
import Social from "../components/social"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Social />
    <Nav />
  </Layout>
)

export default IndexPage
