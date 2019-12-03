import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h2 style={{padding: '1.0875rem', color: 'var(--blue-grey-three)'}}>A Quick Synopsis</h2>
    <p style={{padding: '1.0875rem', color: 'var(--blue-grey-three)'}}>
      I've always been interested in technology, particularly with how applications looked and functioned, which is why I decided to pursue a degree in Interaction Design.
    </p>

    <p style={{padding: '1.0875rem', color: 'var(--blue-grey-three)'}}>
      In May 2018, I graduated from SUNY Polytechnic Institue in snowy Utica, New York. After college, I took a job working as a Business Analyst for MetLife.
    </p>
    
    <p style={{padding: '1.0875rem', color: 'var(--blue-grey-three)'}}>
      In January 2020, I'll be doing some freelance work before I start Flatiron School's UI/UX Design Program in March! I decided to make this jump because I've learned that I work best when I have the opportunity to make an impact through my work and pursue what I'm most passionate about, which is design!
    </p>

    <p style={{padding: '1.0875rem', color: 'var(--blue-grey-three)'}}>
      In case you were wondering, right now I'm probably at the gym, attempting to learn how to DJ, or listening to music.
    </p>

    <p style={{padding: '1.0875rem', color: 'var(--blue-grey-three)'}}>
      More to come soon.
    </p>
  </Layout>
)

export default AboutPage
