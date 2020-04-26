import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"

import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import SEO from "../components/seo"
import check from "../images/check-circle-2.svg"
import BackButton from "../components/back"
import TopButton from "../components/top"

import bannerProposal from "../images/bannerProposal.pdf"


const BannerWrapper = styled.div`
    padding-left: 1.0875rem;
    padding-right: 1.0875rem;

  h1 {
    max-width: 275px;
    margin-top: 40px;
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
    font-weight: bold;
    font-size: 18px;
    color: var(--blue-grey-three);
    text-decoration: none;
    //border-bottom: 2px solid var(--purple-six);
    //padding-bottom: 5px;
    margin-top: 50px;
    margin-bottom: -5px;
    letter-spacing: .05em;
    text-transform: uppercase;
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
    font-weight: normal;
    font-size: 10px;
    color: var(--blue-grey-three);
    margin-top: 8px;
    text-align: center;
  }

  .banner-container .col {
    margin: 0 auto;
  }

  // Creates space between two images
  .course-details {
    padding-top: 15px;
  }

  .caption-two {
      padding-bottom: 20px;
  }

  .bm-container-4 {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
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


  @media (min-width: 800px) {

    h1 {
      max-width: 100%;
    }

    .bm-container-2, .bm-container-3, .bm-container-4, h4 {
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }

    .bm-video {
      width: 500px;
      height: 400px;
    }

    .banner-container {
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      overflow: hidden;
    }

    .banner-container .col {
      flex: 1;
      margin: 0 auto;
    }

    .bm {
      padding: 1%;
    }
`

const Banner = () => (
    <Layout id="top">
          <SEO title="Banner Mobile" />
          
          <BannerWrapper>
            <Link to="/work/">
                  <BackButton />
            </Link>
            <h1>Banner Mobile App</h1>
            
            <div className="tools">
                <a href="https://ionicframework.com/"><span>Ionic</span></a>
                <a href="https://firebase.google.com/"><span>Firebase</span></a>
                <span>Angular</span>
                <span>HTML</span>
            </div>

            <section>
              <a href={bannerProposal} className="social-text">Project Brief<FontAwesomeIcon icon={['fas', 'file-download']} size="md" className="fa-fw doc-icon" /></a>
              <a href="https://github.com/celinefucci/banner-mobile" className="social-text">View Code<FontAwesomeIcon icon={['fab', 'github']} size="md" className="fa-fw social-icon" /></a>
            </section>
            
            <h2>Overview</h2>
            <p>
                Banner Mobile is an application that allows users to easily view registration information for a subset of classes at the State University of New York (SUNY) Polytechnic Institute. One of its main goals is to simplify the information found in the current Banner Web system.
            </p>

            <section className="banner-container">
              <div className="col bm" style={{ maxWidth: `250px` }}>
                <Image filename="banner1.jpeg" alt="Mobile App Sketches" />
                <h4>Home Screen</h4>
              </div>
              <div className="col bm course-details" style={{ maxWidth: `250px` }}>
                <Image filename="banner2.jpeg" alt="Mobile App Sketches" />
                <h4>Course Details Page</h4>
              </div>
            </section>

            {/* <div style={{ maxWidth: `200px`, margin: `0 auto` }}>
                <Image filename="bmsketch1.jpg" alt="Mobile App Sketches" />
            </div> */}


            <h2>Challenge</h2>
            <p>
                The current Banner Web System is outdated and cluttered. The system is difficult to navigate and inefficient, causing frustration for students who want to quickly view the classes they need to take each semester. Overall, searching for classes is time consuming and forces students to navigate through a series of screens. The challenge I set out to solve was to not only make a mobile version of this system, but to simplify the experience for students.
            </p>

           

            <section>
              <div style={{ maxWidth: `450px` }} className="bm-container-2">
                  <Image filename="bmsketch2.jpg" alt="Mobile App Sketches" />
              </div>
            </section>
            
            <h4>More Sketches Regarding My Plan for the UI</h4>

            <h2>Expectations</h2>
            <p>
                At the beginning of this project, my first expectation was clear - to build a mobile app with Ionic because I had previous experience with it from a prior project. Plus, I knew that building a mobile app would be effective because college students are always on their mobile phones and they are the preferred method of communication.
            </p>
            <p>
                My second expectation was more challenging because it involved extracting data from a database and I wasn't all too familiar with database development. Therefore, during my research, I aimed to find the easiest tool to use and learn within a few weeks.
            </p>
            
            <section>
              <div style={{ maxWidth: `450px` }} className="bm-container-3">
                  <Image filename="firebase.png" alt="Database Image" />
              </div>
            </section>
            <h4 className="caption-two">A Snapshot of Firebase Data</h4>
            <hr />

            <h2>Process & Experience</h2>
            <p>
                The first step in the process was to create an App Design Document/Project Brief. From here, I worked through four project stages:
            </p>
            <ol>
                <li className="project-steps">Research</li>
                <li className="project-steps">Creating a <a href="https://en.wikipedia.org/wiki/State_diagram">State Diagram</a></li>
                <li className="project-steps">Sketches/Mockups/Prototypes</li>
                <li className="project-steps">Building the Final Application</li>
            </ol>
            <p>
                I chose this approach because I found success with it from other past projects I worked on. Research is an important first step in any project. Creating a state diagram allowed me to determine the behavior of the application and its various states. Moving forward, I took a unique angle when I started to build the final application because I used Firebase, a newer, unfamiliar database tool. I ended up choosing Firebase because of its realtime, offline, and fast connection capabilities. Firebase also had a simple setup. Finding a simple tool was key because I had a limited amount of time to learn and implement it.
            </p>
            <hr />

            <h2>Outcome</h2>
            <p>
                Although this project got off to a late start in the semester, I was proud of the end result because I succeeded at extracting data from a database, which was difficult and frustrating at times. This project was meaningful to me because I challenged myself to learn an unfamiliar technology and step out of my comfort zone. Additionally, it was my last project before graduation.
            </p>
            <p>
                Effectively, this project was a working prototype that would have had a bright future if I didn't graduate and was able to work on implementing it with school administrators. By the end, I had learned a crucial lesson which posed the question: 
            </p>
            <p>
                <em>"Why overhaul a system that's not broken?"</em>
            </p>
            <p> 
                My answer to that is projects built by students should be deemed important because they are innovative, unique, and have the opportunity to make an impact by improving academic and campus life.  
            </p>
            
            {/* <div style={{ maxWidth: `450px` }}>
                <Image filename="kyrSol1.png" alt="Database Image" />
            </div> */}
            <section className="bm-container-4">
              <iframe style={{ margin: `0 auto` }} width="300" height="315" className="bm-video" src="https://www.youtube.com/embed/LfKXKluJyIw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
            <h4 className="caption-two">Final Product Video</h4>
            <hr />
            
            <h2>My Role</h2>
            <p>This was a solo endeavor. I was responsible for the app design document, sketches, UI design, coding, and presentation decks. Here are some of my further learnings:</p>
            <ul>
                <li><img src={check} alt="bullet" className="check-bullet"></img>Research is key</li>
                <li><img src={check} alt="bullet" className="check-bullet"></img>Extracting data from a database</li>
                <li><img src={check} alt="bullet" className="check-bullet"></img>When to ask other developers for help</li>
                <li><img src={check} alt="bullet" className="check-bullet"></img>Defining a plan leads to success</li>
            </ul>
            <TopButton />
          </BannerWrapper>
    </Layout> 
          
)

export default Banner