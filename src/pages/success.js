import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import BackButton from "../components/back"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SuccessWrapper = styled.div`
  padding-left: 1.0875rem;
  padding-right: 1.0875rem;

  h1 {
    max-width: 250px;
    margin-top: 40px;
    color: var(--purple-six);
    font-size: 40px;
  }

  h2 {
    color: var(--blue-grey-three);
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: .05em;
  }

  h3 {
    color: var(--blue-grey-three);
    font-size: 16px;
    padding-top: 30px;
    letter-spacing: .02em;
  }

  p {
      color: var(--blue-grey-five);
      line-height: 1.5;
      margin-top: -10px;
  }

  .right-arrow {
    color: var(--purple-six);
    margin-right: 8px;
  }

  li a {
    font-size: 14px;
    color: var(--blue-grey-five);
    line-height: 1.8;
    text-decoration: none;
    transition: all 0.2s ease 0s;
    border-bottom: 2px solid var(--purple-six);
    padding-bottom: 1px;
    padding-right: 1px;
  }

  a:hover {
    color: var(--purple-six);
    transition: all 0.2s ease 0s;
  }

  li {
    padding-bottom: 15px;
    font-size: 14px;
    color: var(--blue-grey-five);
  }


  @media (min-width: 575px) {
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;

    h1 {
      max-width: 100%;
    }
  }
`

const SuccessPage = () => (
    <Layout>
        <SEO title="Thank You" />
        <SuccessWrapper>
            <Link to="/contact/">
                <BackButton />
            </Link>
            <h1>thanks for contacting me!</h1>
            
            <p>I'll get back to you as soon as I can.</p>
            <h3>Helpful Links:</h3>

            <ul>

              <li>
                <FontAwesomeIcon icon={['fas', 'arrow-right']} size="md" className="fa-fw right-arrow" />
                <Link to="/">Home</Link>
              </li>

              <li>
                <FontAwesomeIcon icon={['fas', 'arrow-right']} size="md" className="fa-fw right-arrow" />
                <Link to="/work">View My Work</Link>
              </li>

              <li>
                <FontAwesomeIcon icon={['fas', 'arrow-right']} size="md" className="fa-fw right-arrow" />
                <Link to="/about">About Me</Link>
              </li>

              <li>
                <FontAwesomeIcon icon={['fas', 'arrow-right']} size="md" className="fa-fw right-arrow" />
                <Link to="/music">Mixtapes</Link>
              </li>

            </ul>
        </SuccessWrapper>
    </Layout>
)
  
export default SuccessPage