import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "../styles/palette.scss"

const ContactForm = () => (
    // <form 
    //     name="contact" 
    //     method="post"
    //     action="/success"
    //     data-netlify="true"
    //     data-netlify-honeypot="bot-field"
    // >
    //     <input type="hidden" name="bot-field" />

    //     <div>
    //         <label htmlFor="name">Name</label>
    //         <input type="text" name="name" id="name" />
    //     </div>

    //     <div>
    //         <label htmlFor="email">Email</label>
    //         <input type="text" name="email" id="email" />
    //     </div>

    //     <div>
    //         <label htmlFor="message">Message</label>
    //         <textarea name="message" id="message" rows="6" required />
    //     </div>

    //     <div>
    //         <input type="submit" value="Drop a line" />
    //         <input type="reset" value="Eraser" />
    //     </div>
    // </form>


    // <form 
    //     name="contact" 
    //     method="post" 
    //     action="/success" 
    //     data-netlify="true" 
    //     data-netlify-honeypot="bot-field"
    // > 
    //     <input type="hidden" name="bot-field" /> 
    //     <input type="hidden" name="form-name" value="contact" />  

    //     <div className="field half first">
    //         <label htmlFor="name">Name</label>
    //         <input type="text" name="name" id="name" />
    //     </div>

    //     <div className="field half">
    //         <label htmlFor="email">Email</label>
    //         <input type="text" name="email" id="email" />
    //     </div>

    //     <div className="field">
    //         <label htmlFor="message">Message</label>
    //         <textarea name="message" id="message" rows="6" />
    //     </div>

    //     <div className="field">
    //         <div data-netlify-recaptcha="true"></div>
    //     </div>

    //     <ul className="actions">
    //         <li>
    //             <input type="submit" value="Send Message" className="special" />
    //         </li>
    //         <li>
    //             <input type="reset" value="Clear" />
    //         </li>
    //     </ul>

    // </form>


      <form
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
        <p>
          <button type="submit">Send</button>
        </p>
      </form>


)

export default ContactForm
