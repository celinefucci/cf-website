/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Helmet from "react-helmet"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import { totalmem } from "os";

// const Seo = ({ description, lang, meta, title }) => (
//   <StaticQuery 
//     query={graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Helmet 
//           title={data.site.siteMetadata.title}
//           meta={[
//             { name: 'description', content: metaDescription },
//             { property: 'og:title', content: title },
//             { property: 'og:description', content: metaDescription },
//             { property: 'og:type', content: 'website' },
//             { name: 'twitter:card', content: 'summary' },
//             { name: 'twitter:creator', content: site.siteMetadata.author },
//             { name: 'twitter:title', content: title },
//             { name: 'twitter:description', content: metaDescription }
//           ]}>
//           <html lang="en" />
//         </Helmet>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <Header siteDescription={data.site.siteMetadata.description} />
//         <Header siteAuthor={data.site.siteMetadata.author} />
//         </>
//     )}
//   />
// )

// Seo.defaultProps = {
//   lang: `en`,
//   meta: [],
//   description: ``,
// }

// Seo.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired,
// }

// export default Seo




function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
