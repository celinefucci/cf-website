import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import SEO from "../components/seo"

const KYRWrapper = styled.div`
    padding-left: 1.0875rem;
    padding-right: 1.0875rem;

  h1 {
    max-width: 250px;
    margin-top: 50px;
    color: var(--purple-six);
    font-size: 40px;
  }

  .social-icon {
    display: inline-block;
    //margin-bottom: 20px;
    color: var(--purple-six);
    background-color: var(--purple-nine);
    border-radius: 50%;
    padding: 8px;
    //font-size: 16px;
}   

  h2 {
    font-weight: normal;
    font-size: 18px;
    color: var(--blue-grey-three);
    text-decoration: none;
    //border-bottom: 2px solid var(--purple-six);
    //padding-bottom: 5px;
    margin-top: 50px;
  }

  p {
    font-size: 14px;
    font-weight: normal;
    color: var(--blue-grey-five);
    margin-top: -8px;
    margin-bottom: 18px;
  }
`

const KYR = () => (
    <Layout>
          <SEO title="Know Your Rights" />
          <KYRWrapper>
            <h1>Know Your Rights iOS App</h1>
            <a href="https://github.com/celinefucci/know-your-rights" className="social-icon"><FontAwesomeIcon icon={['fab', 'github']} size="md" className="fa-fw" /></a>


            <h2>Introduction & Goal</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat arcu ante, nec cursus tortor egestas ac. Praesent bibendum a nibh et suscipit. Proin in ipsum at ipsum lacinia dictum sit amet eu augue. Donec id porta tortor. Etiam lacus nibh, ultricies ac sodales non, efficitur at magna. Nulla facilisi. Proin eget elit eget orci porttitor commodo ac nec nisi.</p>

            <h2>Process & Experience</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat arcu ante, nec cursus tortor egestas ac. Praesent bibendum a nibh et suscipit. Proin in ipsum at ipsum lacinia dictum sit amet eu augue. Donec id porta tortor. Etiam lacus nibh, ultricies ac sodales non, efficitur at magna. Nulla facilisi. Proin eget elit eget orci porttitor commodo ac nec nisi.</p>

            <h2>The Outcome</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat arcu ante, nec cursus tortor egestas ac. Praesent bibendum a nibh et suscipit. Proin in ipsum at ipsum lacinia dictum sit amet eu augue. Donec id porta tortor. Etiam lacus nibh, ultricies ac sodales non, efficitur at magna. Nulla facilisi. Proin eget elit eget orci porttitor commodo ac nec nisi.</p>

            <h2>Credits & My Role</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat arcu ante, nec cursus tortor egestas ac. Praesent bibendum a nibh et suscipit. Proin in ipsum at ipsum lacinia dictum sit amet eu augue. Donec id porta tortor. Etiam lacus nibh, ultricies ac sodales non, efficitur at magna. Nulla facilisi. Proin eget elit eget orci porttitor commodo ac nec nisi.</p>
          </KYRWrapper>
    </Layout> 
          
)

export default KYR