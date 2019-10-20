import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../styles/palette.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import resume from "../images/CelineFucci_Resume2019.pdf";


const HeaderWrapper = styled.div`
  margin-bottom: 1.45rem;
  display: flex;    
  flex-direction: row;
  justify-content: space-between;
`

const Headline = styled.div`
  max-width: 960;
  padding: 1.45rem 1.0875rem;

  h1 {
    margin: 0;
  }
`

const StyledLink = styled(Link)`
  font-family: var(--secondary-font);
  font-size: 20px;
  color: var(--blue-grey-three);
  text-decoration: none;
  border-bottom: 2px solid var(--purple-six);
  padding-bottom: 5px;
`

const ResumeButton = styled.button`
    cursor: pointer;
    width: 103px;
    height: 35px;
    background-color: transparent;

    border: 2px solid var(--blue-grey-three);

    a {
      color: var(--blue-grey-three);
      font-size: 14px;
    }
    
    transition: all 0.3s ease 0s;
    margin-right: 20px;
    margin-top: 30px;
  
    &:hover {
        //color: var(--purple-six);
        transition: all 0.3s ease 0s;
        box-shadow: inset 0 0 0 3px var(--purple-eight);
    }

    .resume-icon {
        margin-left: 5px;
        color: var(--blue-grey-three);
    }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Headline>
      <h1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
    </Headline>
    <ResumeButton>
        <a href={resume}>RESUME<FontAwesomeIcon icon="arrow-down" size="md" className="resume-icon" /></a>
    </ResumeButton> 
  </HeaderWrapper>
)

export default Header

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

//export default Header
