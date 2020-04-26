import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import Helmet from "react-helmet"

import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import { GlobalStyle } from "../theme/globalStyle"

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { faUser, faFileCode, faPhoneAlt, faArrowDown, faCompactDisc, faLongArrowAltRight, faFileDownload, faArrowLeft, faArrowUp, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedinIn, faSpotify, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPaperPlane } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far, fab, faUser, faFileCode, faPhoneAlt, faArrowDown, faTwitter, faLinkedinIn, faSpotify, faEnvelope, faGithub, faPaperPlane, faCompactDisc, faLongArrowAltRight, faFileDownload, faArrowLeft, faArrowUp, faArrowRight)

// Smooth Scroll
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}


const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 960;

  // HORIZONTAL LINE LENGTH IN INDEX.JS
  //padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Layout = ({ children }) => (
  <StaticQuery 
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Helmet 
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}>
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <ContentWrapper>{children}</ContentWrapper>
        <Footer />
        </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <GlobalStyle />
//       <Header siteTitle={data.site.siteMetadata.title} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0px 1.0875rem 1.45rem`,
//           paddingTop: 0,
//         }}
//       >
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout
