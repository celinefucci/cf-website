import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contactform"

const ContactPage = () => (
    <Layout>
          <SEO title="Contact" />
          <h1>Hi!</h1>
          <p>This is the contact page</p>
          <ContactForm />
    </Layout>       
)

export default ContactPage