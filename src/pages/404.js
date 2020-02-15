import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NotFound = styled.div`
  padding-left: 1.0875rem;
  padding-right: 1.0875rem;

  h1 {
    max-width: 250px;
    margin-top: 40px;
    margin-bottom: 40px;
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
  
`

const NotFoundPage = () => (
    <Layout>
        <SEO title="404" />
        <NotFound>
            
            <h1>looks like you're lost</h1>
            <h2>Error Code 404</h2>
            
            <p>This page doesn't exist. Did you mistype the address? If not, the page may have been deleted, moved, or renamed.</p>
            <h3>Let's Get You Back On Track:</h3>

            <ul>
              <li>
                <FontAwesomeIcon icon={['fas', 'arrow-right']} size="md" className="fa-fw right-arrow" />
                <Link to="/">Homepage</Link>
              </li>

              <li>
                <FontAwesomeIcon icon={['fas', 'arrow-right']} size="md" className="fa-fw right-arrow" />
                <Link to="/work">View My Work</Link>
              </li>

              <li>
                <FontAwesomeIcon icon={['fas', 'arrow-right']} size="md" className="fa-fw right-arrow" />
                <Link to="/contact">Contact Me</Link>
              </li>

              <li>
                <FontAwesomeIcon icon={['fas', 'arrow-right']} size="md" className="fa-fw right-arrow" />
                <Link to="/music">Jam Out</Link>
              </li>

            </ul>
        </NotFound>
    </Layout>
)
  
export default NotFoundPage
