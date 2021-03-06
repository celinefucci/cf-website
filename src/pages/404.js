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
    margin-top: -35px;
    margin-bottom: 20px;
    color: var(--purple-eight);
    font-size: 130px;
    font-family: var(--secondary-font);
  }

  h2 {
    color: var(--blue-grey-three);
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: .05em;
    margin-top: 40px;
    font-family: var(--secondary-font);
  }

  h3 {
    color: var(--blue-grey-three);
    font-size: 18px;
    margin-top: -15px;
    //padding-bottom: 25px;
  }

  h4 {
    color: var(--blue-grey-three);
    font-size: 16px;
    padding-top: 30px;
    //text-transform: uppercase;
    letter-spacing: .03em;
    margin-bottom: 12px;
  }

  p {
      color: var(--blue-grey-five);
      line-height: 1.5;
      margin-top: -12px;
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
    padding-bottom: 20px;
    font-size: 14px;
    color: var(--blue-grey-five);
  }


  @media (min-width: 800px) {
    //max-width: 100%;
  }
  
`

const NotFoundPage = () => (
    <Layout>
        <SEO title="404" />
        <NotFound>

            <h2>error</h2>
            <h1>404</h1>
            
            <h3>This page doesn't exist.</h3>

            <p>
              Did you mistype the address? If not, the page may have been deleted, moved, or renamed.
            </p>

            <h4>Get Back On Track:</h4>

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
                <Link to="/contact">Contact Me</Link>
              </li>

              <li>
                <FontAwesomeIcon icon={['fas', 'arrow-right']} size="md" className="fa-fw right-arrow" />
                <Link to="/music">Mixtapes</Link>
              </li>

            </ul>
        </NotFound>
    </Layout>
)
  
export default NotFoundPage
