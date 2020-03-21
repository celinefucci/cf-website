import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "../styles/palette.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        padding: 18px 20px;
        margin: 6px 0;
        border: 1px solid var(--blue-grey-eight);
        border-radius: 4px;
        font-size: 14px;
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
        height: 175px;
        padding: 12px 20px;
        border: 1px solid var(--blue-grey-eight);
        border-radius: 4px;
        background-color: var(--blue-grey-nine);

        // Get rid of resize on mobile
        resize: none;

        font-family: var(--secondary-font);
        font-size: 14px;
        box-shadow: none;
    }

    textarea:focus {
       border: 2px solid var(--blue-grey-three);
    }

    // Gets rid of red outline for validation of input and textarea
    input:invalid {
      box-shadow: none;
    }

    input:-moz-submit-invalid {
      box-shadow: none;
    }

    input:-moz-ui-invalid {
      box-shadow: none;
    }

    textarea:invalid {
      box-shadow: none;
    }

    textarea:-moz-submit-invalid {
      box-shadow: none;
    }

    textarea:-moz-ui-invalid {
      box-shadow: none;
    }


    button[type=submit] {
        color: var(--purple-six);
        background-color: transparent;
        border: 1px solid var(--purple-six);
        font-size: 16px;
        border-radius: 4px;
        padding: 12px 20px;
        text-decoration: none;
        margin: 0 0;
        cursor: pointer;
        transition: all 0.2s ease 0s;
        font-weight: bold;
        width: 100%;
    }

    button[type=submit]:hover {
        color: var(--purple-ten);
        background-color: var(--purple-six);
        //border: none;
    } 

    .send-button {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      line-height: 1;
      align-items: center;
      transition: all 0.2s ease 0s;
    }

    .send-button:hover {
      .send-icon {
        transform: rotate(45deg);
        transition: all 0.2s ease 0s;
      }
    }

    .send-icon {
      transition: all 0.2s ease 0s;
      margin-top: 1px;
    }

    // Media Queries
    @media (min-width: 800px) {
      width: 800px;
      margin-left: auto;
      margin-right: auto;
    }

    @media (min-width: 600px) {
      p .send-button {
        max-width: 40%;
        margin: 0 auto;
      }
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
        <p className="b">
          <label>
            Your Name
            <br />
            <input type="text" name="name" required />
          </label>
        </p>
        <p className="b">
          <label>
            Your Email
            <br />
            <input type="email" name="email" required />
          </label>
        </p>
        <p className="b">
          <label>
            Message
            <br />
            <textarea type="input" name="message" required></textarea>
          </label>
        </p>
        {/* TODO - RECAPTCHA */}
        {/* <div data-netlify-recaptcha="true"></div> */}
        <p className="b c">
          <button type="submit" className="send-button">Send Message<FontAwesomeIcon icon={['far', 'paper-plane']} size="lg" className="fa-fw send-icon" /></button>
        </p>
      </Form>
)

export default ContactForm
