import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

// TODO
import Nav from "../components/nav"
import Social from "../components/social"
import Intro from "../components/intro"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Social />
    <Intro />
    <Nav />
  </Layout>
)

export default IndexPage
