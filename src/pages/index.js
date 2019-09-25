import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ImgWrapper = styled.div`
  max-width: 100px;
  margin-bottom: 1.45rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi!</h1>
    <p>I'm in the process of completely overhauling this website. For now, feel free to visit my other portfolio site.</p>
    <a href="http://people.sunyit.edu/~fuccic/">Portfolio</a>
    <ImgWrapper>
      <Image />
    </ImgWrapper>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
