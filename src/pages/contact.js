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
    </Layout> 
          
)

export default ContactPage