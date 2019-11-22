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


    <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field"> 
        <input type="hidden" name="bot-field" /> 
        <input type="hidden" name="form-name" value="contact" />  

        <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
        </div>

        <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
        </div>

        <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" />
        </div>
        
        <ul className="actions">
            <li>
            <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
            <input type="reset" value="Clear" />
            </li>
        </ul>
    </form>


)

export default ContactForm
