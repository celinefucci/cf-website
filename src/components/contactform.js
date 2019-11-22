import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "../styles/palette.scss"

const Contactform = () => (
    <form 
        name="contact" 
        method="post"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
    >
        <input type="hidden" name="bot-field" />

        <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
        </div>

        <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" required />
        </div>

        <div>
            <input type="submit" value="Drop a line" />
            <input type="reset" value="Eraser" />
        </div>
    </form>
)

export default Contactform

// const ContactWrapper = styled.div`

//   @media (max-width: 768px) {
//     min-height: 21vh;
//   }
// `


// const FooterText = styled.footer`
//   margin-top: auto;
//   color: var(--blue-grey-six);
//   font-size: 12px;
//   font-weight: 300;
// `


//export default Contact