import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "../styles/palette.scss"

const Contactform = () => (
    <form 
        name="contact" 
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        data-netlify="true"
        netlify-honeypot="bot-field"
    >
        {/* reCAPTCHA */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
            <label 
                htmlFor="bot-field">Don’t fill this out:{' '}
                <input name="bot-field" />
            </label>
        </p>


        <input name="name" placeholder="Your Name" type="text" />
        <input name="email" placeholder="name@name.com" type="email" />
        <textarea name="message" />
        <button>Submit</button>
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