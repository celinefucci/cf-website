import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"

import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import SEO from "../components/seo"
import check from "../images/check-circle-2.svg"

import bannerProposal from "../images/bannerProposal.pdf"


const BannerWrapper = styled.div`
    padding-left: 1.0875rem;
    padding-right: 1.0875rem;

  h1 {
    max-width: 275px;
    margin-top: 50px;
    color: var(--purple-six);
    font-size: 40px;
    margin-bottom: 18px;
  }

  .doc-icon {
    font-size: 18px;
    margin-right: 15px;
    padding-left: 5px;
    position: relative;
    top: 0px;
    left: 1px;
  }

  .social-text {
    font-size: 14px;
    font-weight: bold;
    color: var(--purple-six);
    background-color: var(--purple-nine);
    border-radius: 50px;
    //padding: 8px;
    display: inline-block;
    padding-left: 22px;
    margin-top: 30px;
    padding-top: 9px;
    padding-bottom: 10px;
    margin-right: 10px;
    border-bottom: 2px solid var(--purple-six);
}

  .social-icon {
    font-size: 18px;
    margin-right: 15px;
    padding-left: 5px;
    position: relative;
    top: 1px;
    left: 1px;
}   

.tools {
    margin-top: 25px;
}

span {
  border-radius: 50px;
  padding-right: 12px;
  padding-left: 12px;
  padding-top: 5px;
  padding-bottom: 5px;

  background-color: var(--blue-grey-two);
  color: var(--blue-grey-ten);
  font-size: 10px;
  font-weight: bold;
  letter-spacing: .13em;
  margin-right: 10px;
}

  h2 {
    font-weight: normal;
    font-size: 18px;
    color: var(--blue-grey-three);
    text-decoration: none;
    //border-bottom: 2px solid var(--purple-six);
    //padding-bottom: 5px;
    margin-top: 50px;
    margin-bottom: -5px;
  }


  p {
    font-size: 14px;
    font-weight: normal;
    color: var(--blue-grey-five);
    //margin-top: -8px;
    //margin-bottom: 18px;
    line-height: 1.8;
  }

  h4 {
    font-weight: bold;
    font-size: 10px;
    color: var(--blue-grey-three);
    margin-top: 8px;
  }

  .caption-two {
      padding-bottom: 20px;
  }

  hr {
    margin-top: 50px;
    max-width: 100%;
    height: 1px;
    border: 0;
    background-color: var(--blue-grey-eight);
}

ol {
    list-style: none;
    counter-reset: li;
}

.project-steps a {
    text-decoration: none;
    color: var(--blue-grey-five);
    transition: all 0.2s ease 0s;
    font-size: 14px;
    border-bottom: 2px solid var(--purple-six);
    padding-bottom: 1px;
    padding-right: 1px;
}

  a:hover {
    color: var(--purple-six);
    transition: all 0.2s ease 0s;
  } 
  

.project-steps::before {
    content: counter(li);
    color: var(--purple-six);
    display: inline-block; 
    width: 1em;
    margin-left: -1em;
    font-weight: bold;
    font-size: 16px;
}

.project-steps {
    counter-increment: li;
}

.check-bullet {
    padding-right: 8px;
    padding-top: 8px;
    margin-left: -17px;
    position: relative;
    top: 3px;
}

  li {
    font-size: 14px;
    color: var(--blue-grey-five);
    line-height: 1.8;
  }


  ul {
      list-style: none;
      line-height: 1.8;
  }
`

const Banner = () => (
    <Layout>
          <SEO title="Banner Mobile" />
          <BannerWrapper>
            <h1>Banner Mobile App</h1>
            
            <div className="tools">
                <a href="https://ionicframework.com/"><span>Ionic</span></a>
                <a href="https://firebase.google.com/"><span>Firebase</span></a>
                <span>HTML</span>
                <span>JS</span>
            </div>


            <a href={bannerProposal} className="social-text">Project Brief<FontAwesomeIcon icon={['fas', 'file-download']} size="md" className="fa-fw doc-icon" /></a>

            <a href="https://github.com/celinefucci/banner-mobile" className="social-text">View Code<FontAwesomeIcon icon={['fab', 'github']} size="md" className="fa-fw social-icon" /></a>



            <h2>Overview</h2>
            <p>
                Banner Mobile is an application that allows users to easily view information for a subset of classes at the State University of New York (SUNY) Polytechnic Institute in the Communication and Humanities Department for the upcoming Fall 2018 semester. One of its main goals is to simplify the information found in the current Banner Web system.
            </p>

            <div style={{ maxWidth: `450px` }}>
                <Image filename="kyrsketch1.jpg" alt="Mobile App Sketches" />
            </div>
            <div style={{ maxWidth: `450px` }}>
                <Image filename="kyrsketch2.jpg" alt="Mobile App Sketches" />
            </div>
            <h4>First Sketches of the Know Your Rights App</h4>

            <h2>Challenge</h2>
            <p>
                The current Banner Web System is outdated and cluttered. The system is difficult for students to 
                view the classes they need to take each semester. Furthermore, searching for classes is time 
                consuming and forces students to navigate through a series of screens.
            </p>

            <h2>Goals & Expectations</h2>
            <p>
                At the start of this project, I didn't know how it would go. I knew my main challenge would be to extract data from a database and I wasn't all too familiar with database development. During my research, I aimed to find the easiest tool to use and learn within a few weeks. I knew right away that I wanted to build a mobile app with Ionic because I had previous experience with it from a prior project. Additionally, since the Banner System already existed on the Web, I knew building a mobile app would be an effective next step because college students are always on their mobile phones and they're the preferred method of communication.
            </p>
            <div style={{ maxWidth: `450px` }}>
                <Image filename="kyr2.png" alt="Mobile App UI Mockups" />
            </div>
            <h4 className="caption-two">UI Mockups Built With Sketch</h4>
            <hr />

            <h2>Process & Experience</h2>
            <p>
            </p>
            <ol>
                <li className="project-steps">Research</li>
                <li className="project-steps">Creating a <a href="https://en.wikipedia.org/wiki/State_diagram">State Diagram</a></li>
                <li className="project-steps">Sketches/Mockups/Prototypes</li>
                <li className="project-steps">Building the Final Application</li>
            </ol>

            <p>
            </p>
            <hr />

            <h2>The Outcome</h2>
            <p>
            </p>
            <div style={{ maxWidth: `450px` }}>
                <Image filename="kyrSol1.png" alt="Mobile App Presentation Slides" />
            </div>
            <div style={{ maxWidth: `450px` }}>
                <Image filename="kyrSol2.png" alt="Mobile App Presentation Slides" />
            </div>
            <h4 className="caption-two">Final Presentation Slides</h4>
            <hr />
            
            <h2>My Role</h2>
            <p>This was a solo endeavor. I was responsible for the app design document, sketches, UI design, coding, and presentation decks. Here are some of my learnings:</p>
            <ul>
                <li><img src={check} alt="bullet" className="check-bullet"></img>Extracting data from a database</li>
                <li><img src={check} alt="bullet" className="check-bullet"></img>How to ask other developers for help</li>
                <li><img src={check} alt="bullet" className="check-bullet"></img>Create a plan to achieve success</li>
                <li><img src={check} alt="bullet" className="check-bullet"></img>Research is key</li>
            </ul>
          </BannerWrapper>
    </Layout> 
          
)

export default Banner