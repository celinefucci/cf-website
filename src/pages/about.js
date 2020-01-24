import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"


const AboutWrapper = styled.div`
  padding-left: 1.0875rem;
  padding-right: 1.0875rem;

  h1 {
    max-width: 250px;
    margin-top: 50px;
    color: var(--purple-six);
    font-size: 40px;
  }

  h4 {
    font-weight: normal;
    font-size: 10px;
    color: var(--blue-grey-three);
    margin-top: 12px;
  }

  .story {
    margin-top: 60px;
    max-width: 147px;
  }

  .last-p {
    padding-bottom: 30px;
  }

  a, span {
    color: var(--blue-grey-three);
    transition: all 0.2s ease 0s;
    font-size: 14px;
    text-decoration: none;
    font-family: var(--secondary-font);
    border-bottom: 2px solid var(--purple-six);
    padding-bottom: 5px;
  }

  a:hover {
    color: var(--purple-six);
    transition: all 0.2s ease 0s;
  } 
  
  .about-email {
    display: inline;
  }
`

const AboutHeading = styled.h2`
  font-weight: normal;
  font-size: 16px;
  color: var(--blue-grey-three);
  text-decoration: none;
  border-bottom: 2px solid var(--purple-six);
  padding-bottom: 5px;
  max-width: 130px;
  font-family: var(--secondary-font);
  margin-top: 60px;
`

const AboutText = styled.p`
  color: var(--blue-grey-three);
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 15px;

  strong {
    color: var(--purple-six);
  }
`


const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <AboutWrapper>
      <h1>thanks for stopping by!</h1>
      <AboutHeading>Keepin' It Brief</AboutHeading>
      <AboutText>
        My name is Celine. I'm a <strong>UI Designer</strong> living in New York.
        I'm super passionate about <strong>design</strong>. I love creating <strong>clean interfaces</strong> and 
        experimenting with <strong>fluid animations</strong>. I'm inspired by thoughtful products 
        that have a practical <strong>UX</strong> approach.
      </AboutText>
    </AboutWrapper>

    <div style={{ maxWidth: `450px` }}>
      <Image filename="about3.JPG" alt="Profile Picture" />
    </div>

    <AboutWrapper>
      <h4>Churros are awesome.</h4>
      <AboutHeading className="story">Some Extra Details</AboutHeading>
      <AboutText>
        Here's a little more info about me. 
      </AboutText>
      <AboutText>
        Besides school projects, my first experience working in design
        was during my summer internship at MetLife in 2017. As a front-end developer
        on a four-person team, I was responsible for modernizing an outdated insurance application.
      </AboutText>
      <AboutText>
        My passion for staying current with the latest design trends, creating polished user interfaces, and 
        building intuitive experiences makes me a driven design technologist.
      </AboutText>
      <AboutText>
        In January 2020, I'll be doing some freelance work before I start Flatiron School's 
        UI/UX Design Program in March! I decided to make this jump because I've learned that I 
        work best when I have the opportunity to make an impact through my work and pursue what I'm 
        most passionate about.
      </AboutText>
      <AboutText className="last-p">
        As for some of my interests, I love music, which is why I dedicated a portion of this site to featuring my playlists.
        I'm also learning how to DJ. Other than that, I love to work out. I'm actually glad I do
        because I have a serious problem avoiding desserts, in case you haven't noticed from the picture above.
      </AboutText>
      
      <div>
        <AboutText className="about-email">Feel free to email at </AboutText>
        <span>
          <a href="mailto:celinefucci@gmail.com" className="email">
            celinefucci@gmail.com
          </a>
        </span>
      </div>

    </AboutWrapper>
  </Layout>
)

export default AboutPage
