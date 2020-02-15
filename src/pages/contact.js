import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactform"
import ContactInfo from "../components/contactinfo"
import Social from "../components/social"

import BackButton from "../components/back"
import TopButton from "../components/top"

const ContactPage = () => (
    <Layout>
          <SEO title="Contact" />
          <Social />
          <Link to="/" style={{ paddingLeft: `1.0875rem`, paddingRight: `1.0875rem` }}>
            <BackButton />
          </Link>
          <ContactInfo />
          <ContactForm />
          <div style={{ paddingLeft: `1.0875rem`, paddingRight: `1.0875rem` }}>
            <TopButton />
          </div>
    </Layout> 
)

export default ContactPage