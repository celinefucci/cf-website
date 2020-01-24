import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"

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
    //margin-top: -8px;
    //margin-bottom: 18px;
    line-height: 1.8;
  }

  h4 {
    font-weight: normal;
    font-size: 10px;
    color: var(--blue-grey-three);
    margin-top: 12px;
    padding-left: 1px;
  }

  .caption-two {
      padding-bottom: 20px;
      padding-left: 1px;
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

li::before {
    content: counter(li);
    color: var(--purple-six);
    display: inline-block; 
    width: 1em;
    margin-left: -1em;
}

li {
    counter-increment: li;
}



  ol, li {
    font-size: 14px;
    color: var(--blue-grey-five);
    line-height: 1.8;
  }

  ul li::before {
      content: "▪";
      display: inline-block;
      width: 1em;
      margin-left: -1em;
      color: var(--purple-six);
  }

  ul {
      list-style: none;
      line-height: 1.8;
  }
`

const KYR = () => (
    <Layout>
          <SEO title="Know Your Rights" />
          <KYRWrapper>
            <h1>Know Your Rights iOS App</h1>
            <a href="https://github.com/celinefucci/know-your-rights" className="social-icon"><FontAwesomeIcon icon={['fab', 'github']} size="md" className="fa-fw" /></a>


            <h2>A Mobile App for Students</h2>
            <p>
                Know Your Rights is a convenient mobile application specifically tailored for college students attending the State University of New York Polytechnic Institute to view policies, procedures, and other information surrounding the Title IX federal civil rights law. Students can use the app at any time, as long as they are in possession of their mobile device.
            </p>

            <div style={{ maxWidth: `450px` }}>
                <Image filename="bmsketches.png" alt="Profile Picture" />
            </div>
            <h4>First Sketches of the Know Your Rights App</h4>

            <h2>A Positive Title IX Campaign</h2>
            <p>
                The clients for this project, the Title IX Department at the school, were requesting a solution be built to draw more attention to the law. The solution had to be an effective campaign, one which eliminated the use of intimidating statistics and discouraging imagery regarding Title IX, which previous campaigns used.
            </p>

            <h2>A Personal Resource</h2>
            <p>
                The challenge I set out to solve was to build an effective product that not only brought attention to the importance of Title IX but gave students a personal resource for accessing their rights if they were to encounter or be a victim of a sexual assault.
            </p>

            <h2>Convenient, Accessible, Private</h2>
            <p>
                I did have a certain idea or expectation for the project when it began. I knew right away that I wanted to build a mobile app because I recognized that students are always on their phones. Building an app would be the most accessible and fastest way for students to view information privately.
            </p>
            <hr />

            <h2>Process & Experience</h2>
            <p>
                The first stage in the project was writing a Request for Proposal (RFP) containing information about Title IX and a detailed plan regarding my solution. When the actual project work began, there were three key stages I worked through: 
            </p>
            <ol>
                <li>Creating Sketches</li>
                <li>Designing Mockups/Prototypes</li>
                <li>Building the Final Application</li>
            </ol>
            <div style={{ maxWidth: `450px` }}>
                <Image filename="kyrSol2.png" alt="Profile Picture" />
            </div>
            <div style={{ maxWidth: `450px` }}>
                <Image filename="kyrSol3.png" alt="Profile Picture" />
            </div>
            <h4 className="caption-two">Final UI Showcasing The Most Important Features</h4>

            <p>
                The reason I chose this approach was because through my research, I recognized that it was a popular approach. I needed to draw out sketches to get a sense of the product and building mockups was necessary to arrange the design of the mobile app.
            </p>
            <hr />

            <h2>The Outcome</h2>
            <p>
                The final product was well received and I was very proud. By taking on this project, I did have knowledge of the technologies I needed to use to build the mobile app but at the same time, I was jumping into foreign territory as it was my first time building an app. The next steps included officially releasing the app on campus. Although this didn't happen due to time constraints and graduation, the overall project outcome was successful. Know Your Rights shed a positive light on the Title IX laws on my college campus. It was an effective resource in determining the rights each student had on campus and who they could contact in case of an emergency. Furthermore, it showcased warning signs students should be aware of in sexual assault situations. This project will always be meaningful to me because of the impact it strived to make in the community.
            </p>
            <hr />
            
            <h2>Credits & My Role</h2>
            <p>This was a solo project. Here are some of my learnings:</p>
            <ul>
                <li>Building a mobile app</li>
                <li>Prioritizing small steps</li>
                <li>Working with clients in stages</li>
                <li>Being an effective public speaker</li>
                <li>Taking constructive feedback positively</li>
            </ul>
          </KYRWrapper>
    </Layout> 
          
)

export default KYR