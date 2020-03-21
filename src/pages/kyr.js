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



import kyrProposal from "../images/kyrProposal.pdf"


const KYRWrapper = styled.div`
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
    margin-top: 4px;
  }

  .caption-two, .caption {
      text-align: center;
      padding-bottom: 20px;
      position: relative;
      top: 8px;
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

      width: 800px;
      margin-left: auto;
      margin-right: auto;
      
    
      h1 {
        max-width: 100%;
      }


    .kyr-container {
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      overflow: hidden;
    }

    .kyr-container .col {
      flex: 1;
      padding: 1%;
    }

    .caption {
      text-align: center;
    }

    .kyr-container-2 {
      margin: 0 auto;
    }

    .caption-two {
      position: relative;
      top: 8px;
      text-align: center;
    }

  }
`

const KYR = () => (
    <Layout id="top">
          <SEO title="Know Your Rights" />
       
          
          <KYRWrapper>
            <Link to="/work/">
                  <BackButton />
            </Link>
            
            <h1>Know Your Rights Mobile App</h1>
            
            <div className="tools">
                <a href="https://ionicframework.com/"><span>Ionic</span></a>
                <span>HTML</span>
                <span>CSS</span>
                <span>JS</span>
            </div>

            <section>
              <a href={kyrProposal} className="social-text">Project Brief<FontAwesomeIcon icon={['fas', 'file-download']} size="md" className="fa-fw doc-icon" /></a>
              <a href="https://github.com/celinefucci/know-your-rights" className="social-text">View Code<FontAwesomeIcon icon={['fab', 'github']} size="md" className="fa-fw social-icon" /></a>
            </section>
            
            <h2>Overview</h2>
            <p>
                Know Your Rights is a convenient mobile application specifically tailored for college students attending the State University of New York Polytechnic Institute to view policies, procedures, and other information surrounding the Title IX federal civil rights law. Students can use the app at any time, as long as they are in possession of their mobile device.
            </p>

            <section className="kyr-container">
              <div className="col" style={{ maxWidth: `450px` }}>
                <Image filename="kyrsketch1.jpg" alt="Mobile App Sketches" />
              </div>
              <div className="col" style={{ maxWidth: `450px` }}>
                <Image filename="kyrsketch2.jpg" alt="Mobile App Sketches" />
              </div>
            </section>
            <h4 className="caption">First Sketches of the Know Your Rights App</h4>

            <h2>Challenge</h2>
            <p>
                The challenge I set out to solve was to build an effective product that not only brought attention to the importance of Title IX but gave students an easy-to-access personal resource for viewing their rights if they were to encounter or be a victim of a sexual assault.
            </p>

            <h2>A Positive Campaign</h2>
            <p>
                The clients for this project, the Title IX Department at the school, were requesting a solution be built to draw more attention to the law. The solution had to be an effective campaign, one which eliminated the use of intimidating statistics and discouraging imagery regarding Title IX, which previous campaigns used.
            </p>

            <h2>Convenient, Accessible, Private</h2>
            <p>
                I did have a certain idea or expectation for the project when it began. I knew right away that I wanted to build a mobile app because I recognized that students are always on their phones. Building an app would be the most accessible and fastest way for students to view information privately.
            </p>

            <section>
              <div style={{ maxWidth: `450px` }} className="kyr-container-2">
                  <Image filename="kyr2.png" alt="Mobile App UI Mockups" />
              </div>
            </section>
            <h4 className="caption-two">UI Mockups Built With Sketch</h4>
            <hr />

            <h2>Process & Experience</h2>
            <p>
                The first stage in the project was writing a Request for Proposal (RFP) containing information about Title IX and a detailed plan regarding my solution. When the actual project work began, there were three key stages I worked through: 
            </p>
            <ol>
                <li className="project-steps">Creating Sketches</li>
                <li className="project-steps">Designing Mockups/Prototypes</li>
                <li className="project-steps">Building the Final Application</li>
            </ol>

            <p>
                The reason I chose this approach was because through my research, I recognized that it was a popular approach. I needed to draw out sketches to get a sense of the product and building mockups was necessary to arrange the design of the mobile app.
            </p>
            <hr />

            <h2>Outcome</h2>
            <p>
                The final product was well received and I was very proud. By taking on this project, I did have knowledge of the technologies I needed to use to build the mobile app but at the same time, I was jumping into foreign territory as it was my first time building an app. The next steps included officially releasing the app on campus. Although this didn't happen due to time constraints and graduation, the overall project outcome was successful.
            </p>
            <p>
              Know Your Rights shed a positive light on the Title IX laws on my college campus. It was an effective resource in determining the rights each student had on campus and who they could contact in case of an emergency. Furthermore, it showcased warning signs students should be aware of in sexual assault situations. This project will always be meaningful to me because of the impact it strived to make in the community.
            </p>

            <section className="kyr-container">
              <div style={{ maxWidth: `450px` }} className="col">
                  <Image filename="kyrSol1.png" alt="Mobile App Presentation Slides" />
              </div>
              <div style={{ maxWidth: `450px` }} className="col">
                  <Image filename="kyrSol2.png" alt="Mobile App Presentation Slides" />
              </div>
            </section>
            <h4 className="caption">Final Presentation Slides</h4>
            
            <hr />
            
            <h2>My Role</h2>
            <p>This was a solo endeavor. I was responsible for the project proposal, sketches, prototypes, UI design, coding, and presentation decks. Here are some of my learnings:</p>
            <ul>
                <li><img src={check} alt="bullet" className="check-bullet"></img>Building a mobile app</li>
                <li><img src={check} alt="bullet" className="check-bullet"></img>Prioritizing small steps</li>
                <li><img src={check} alt="bullet" className="check-bullet"></img>Working with clients in stages</li>
                <li><img src={check} alt="bullet" className="check-bullet"></img>Being an effective public speaker</li>
                <li><img src={check} alt="bullet" className="check-bullet"></img>Taking constructive feedback</li>
            </ul>
            <TopButton />
          </KYRWrapper>
    </Layout> 
          
)

export default KYR