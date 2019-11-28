import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "../styles/palette.scss"


const Form = styled.form`
    // Padding = Top, Right, Bottom, Left
    padding-left: 1.0875rem;
    
`

const ContactForm = () => (
      <Form
        name="contact"
        method="post"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        <p>
          <label>
            Your name:
            <br />
            <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your email:
            <br />
            <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message:
            <br />
            <textarea name="message" />
          </label>
        </p>
        {/* TODO - RECAPTCHA */}
        {/* <div data-netlify-recaptcha="true"></div> */}
        <p>
          <button type="submit">Send</button>
        </p>
      </Form>
)

export default ContactForm
