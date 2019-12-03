import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "../styles/palette.scss"


const Form = styled.form`
    // Padding = Top, Right, Bottom, Left
    padding-left: 1.0875rem;
    padding-right: 1.0875rem;

    label {
        color: var(--blue-grey-three);
        font-weight: bold;
        letter-spacing: .05em;
    }

    input {
        width: 100%;
        padding: 12px 20px;
        margin: 6px 0;
        border: 2px solid var(--blue-grey-eight);
        border-radius: 4px;
        font-size: 12px;
        background-color: var(--blue-grey-nine);
        font-family: var(--secondary-font);
    }

    input:focus {
        border: 2px solid var(--blue-grey-three);
    }

    // Removes inner shadow on mobile Safari
    input[type="text"],
    input[type="email"],
    textarea {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    textarea {
        margin: 6px 0;
        width: 100%;
        height: 150px;
        padding: 12px 20px;
        border: 2px solid var(--blue-grey-eight);
        border-radius: 4px;
        background-color: var(--blue-grey-nine);

        // Get rid of resize on mobile
        resize: none;
        font-family: var(--secondary-font);
        font-size: 12px;
    }

    textarea:focus {
        border: 2px solid var(--blue-grey-three);
    }

    button[type=submit] {
        color: var(--blue-grey-three);
        background-color: transparent;
        border: 2px solid var(--blue-grey-three);
        font-size: 16px;

       // border: none;
        border-radius: 4px;
        padding: 10px 28px;
        text-decoration: none;
        margin: 0 2px;
        cursor: pointer;
        transition: all 0.3s ease 0s;
        font-weight: bold;
    }

    button[type=submit]:hover {
        //color: var(--purple-six);
        transition: all 0.3s ease 0s;
        box-shadow: inset 0 0 0 3px var(--purple-eight);
    } 
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
            Your Name
            <br />
            <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email
            <br />
            <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message
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
