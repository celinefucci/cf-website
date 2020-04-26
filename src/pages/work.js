import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"

import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social"
import BackButton from "../components/back"
import TopButton from "../components/top"

// Use buttons/tags for tools used in project. Ex: HTML, CSS

const WorkWrapper = styled.div`
  padding-left: 1.0875rem;
  padding-right: 1.0875rem;

  h1 {
    max-width: 250px;
    margin-top: 40px;
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
    margin-top: -10px;
    margin-bottom: 18px;
  }

  .project-button {
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

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    line-height: 1;
    align-items: center;
    transition: all 0.2s ease 0s;
    margin-top: 18px;
    //margin-bottom: 50px;
}

.project-button:hover {
    color: var(--purple-ten);
    background-color: var(--purple-six);

    .project-icon {
      transform: rotate(-35deg);
      transition: all 0.2s ease 0s;
    }

} 

.project-icon {
  transition: all 0.2s ease 0s;
  margin-top: 1px;
}

hr {
    margin-top: 70px;
    max-width: 100%;
    height: 1px;
    border: 0;
    background-color: var(--blue-grey-eight);
}

div {
    margin: 0 auto;
    //background-color: red;
   // background-image: linear-gradient( 135deg, #97ABFF 10%, #123597 100%);
}

// Greater than 575
  @media (min-width: 800px) {
    
    .kyr-image {
      width: 500px;
      //margin-left: 0;
    }

    .project-button {
      //width: 75%;
    }

    .bm-image {
      width: 200px;
    }

  }

`

const WorkPage = () => (
    <Layout>
        <SEO title="Projects" />
        <Social />
        
        <WorkWrapper>
            <Link to="/">
                <BackButton />
            </Link>
            <h1>projects</h1>
            <h2>Know Your Rights</h2>
            <h3>Mobile App, UI Design</h3>

            <div style={{ maxWidth: `90%` }} className="kyr-image">
                <Link to="/kyr/">
                    <Image filename="kyr1.png" alt="Mobile App Intro Screens" />
                </Link>
            </div>
       
            <Link to="/kyr/">
                <button className="project-button">
                    Read Case Study
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
            <h3>Mobile App, UI Design + Database</h3>

            <div style={{ maxWidth: `50%` }} className="bm-image">
                <Link to="/bm/">
                    <Image filename="bm3.png" alt="Mobile App Intro Screen" />
                </Link>
            </div>
       
            <Link to="/bm/">
                <button className="project-button">
                    Read Case Study
                    <FontAwesomeIcon
                    icon="long-arrow-alt-right"
                    size="lg"
                    className="fa-fw project-icon"
                    />
                </button>
            </Link>
            <TopButton />
        </WorkWrapper>
        
    </Layout>      
)

export default WorkPage
