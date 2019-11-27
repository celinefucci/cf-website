import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactform"
import ContactInfo from "../components/contactinfo"


const ContactPage = () => (
    <Layout>
          <SEO title="Contact" />
          <ContactInfo />
          <ContactForm />
          {/* Temporary style */}
          <h3 style={{padding: 1.0875 + 'rem'}}>Get in Touch</h3>
    </Layout> 
          
)

export default ContactPage