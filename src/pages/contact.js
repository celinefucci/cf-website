import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contactform from "../components/contactform"
import { ReactTypeformEmbed } from 'react-typeform-embed';


const ContactPage = () => (
     <Layout>
          <SEO title="Contact" />
          <h1>Hi!</h1>
          <p>This is the contact page</p>
          <Contactform />
    </Layout>       
)

export default ContactPage