import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "../styles/palette.scss"


const ContactDetails = styled.div`
    // Padding = Top, Right, Bottom, Left
    padding: 1.0875rem;
`

const ContactInfo = () => (
    <ContactDetails>
         <h3>Ask Me a Question</h3>
    </ContactDetails>
)

export default ContactInfo
