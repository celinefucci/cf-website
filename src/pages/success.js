import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import BackButton from "../components/back"


const SuccessWrapper = styled.div`
  padding-left: 1.0875rem;
  padding-right: 1.0875rem;

  h1 {
    max-width: 250px;
    margin-top: 40px;
    color: var(--purple-six);
    font-size: 40px;
  }

  p {
      color: var(--blue-grey-three);
  }
`

const SuccessPage = () => (
    <Layout>
        <SuccessWrapper>
            <Link to="/contact/">
                <BackButton />
            </Link>
            <h1>thanks for contacting me!</h1>
            <p>I'll get back to you as soon as I can.</p>
            <p>In the meantime, check out some of my work or view my resume.</p>
        </SuccessWrapper>
    </Layout>
)
  
export default SuccessPage