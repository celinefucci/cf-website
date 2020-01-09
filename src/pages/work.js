import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"

import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import SEO from "../components/seo"

// Use buttons/tags for tools used in project. Ex: HTML, CSS

const WorkWrapper = styled.div`
  padding-left: 1.0875rem;
  padding-right: 1.0875rem;

  h1 {
    max-width: 250px;
    margin-top: 50px;
    color: var(--purple-six);
    font-size: 40px;
  }

  h2 {
    font-weight: normal;
    font-size: 18px;
    color: var(--blue-grey-three);
    text-decoration: none;
    //border-bottom: 2px solid var(--purple-six);
    //padding-bottom: 5px;
    max-width: 150px;
    margin-top: 50px;
  }

  h3 {
    font-size: 14px;
    font-weight: normal;
    color: var(--blue-grey-five);
    margin-top: -8px;
    margin-bottom: 18px;
  }

  button {
    color: var(--purple-six);
    background-color: transparent;
    border: 1px solid var(--purple-six);
    font-size: 16px;
    border-radius: 4px;
    padding: 12px 20px;
    text-decoration: none;
    margin: 0 0;
    cursor: pointer;
    transition: all 0.2s ease 0s;
    font-weight: bold;
    width: 100%;
}

button:hover {
    color: var(--purple-ten);
    background-color: var(--purple-six);
} 

.project-button {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  line-height: 1;
  align-items: center;
  transition: all 0.2s ease 0s;
  margin-top: 18px;
}

.project-button:hover {
  .project-icon {
    transform: rotate(-35deg);
    transition: all 0.2s ease 0s;
  }
}

.project-icon {
  transition: all 0.2s ease 0s;
  margin-top: 1px;
}

.bm-button {
    color: var(--light-blue-five);
    border: 1px solid var(--light-blue-five);
}

.bm-button:hover {
    color: var(--light-blue-ten);
    background-color: var(--light-blue-five);
    
}

hr {
    margin-top: 70px;
    max-width: 100%;
    height: 1px;
    border: 0;
    background-color: var(--blue-grey-eight);
}

div {
    //margin: 0 auto;
    //background-color: red;
   // background-image: linear-gradient( 135deg, #97ABFF 10%, #123597 100%);
}

`

const WorkPage = () => (
    <Layout>
        <SEO title="Projects" />
        <WorkWrapper>
            <h1>projects</h1>
            <h2>Know Your Rights</h2>
            <h3>Mobile app</h3>

            <div style={{ maxWidth: `100%` }}>
                <Link to="/kyr/">
                    <Image filename="kyr.png" alt="Mobile App Intro Screen" />
                </Link>
            </div>
       
            <Link to="/kyr/">
                <button className="project-button">
                    Go To Project
                    <FontAwesomeIcon
                    icon="long-arrow-alt-right"
                    size="lg"
                    className="fa-fw project-icon"
                    />
                </button>
            </Link>
            <hr />
        </WorkWrapper>

        <WorkWrapper>
            <h2>Banner Mobile</h2>
            <h3>Mobile app</h3>

            <div style={{ maxWidth: `100%` }}>
                <Link to="/bm/">
                    <Image filename="bm.png" alt="Mobile App Intro Screen" />
                </Link>
            </div>
       
            <Link to="/bm/">
                <button className="project-button bm-button">
                    Go To Project
                    <FontAwesomeIcon
                    icon="long-arrow-alt-right"
                    size="lg"
                    className="fa-fw project-icon"
                    />
                </button>
            </Link>
        </WorkWrapper>

    </Layout>      
)

export default WorkPage
