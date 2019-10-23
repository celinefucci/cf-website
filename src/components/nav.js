import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "../styles/palette.scss"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Mobile
const NavWrapper = styled.nav`
    // TODO - Media query
    //@media (max-width: 768px) {
        display: flex;
        justify-content: space-around;

        .link-name {
            font-weight: 500;
            padding-bottom: 20px;

            // Allows user to hover in link proximity
            padding-top: 50px;
            color: var(--blue-grey-three);
            position: relative;
            text-decoration: none;

            &:before {
                background-color: var(--purple-six);
                content: "";
                height: 3px;
                position: absolute;
                bottom: -1px;
                left: 50%;
                transform: translateX(-50%);
                transition: width 0.3s ease-in-out;
                width: 100%;
            }

            &:hover {
                &:before {
                    width: 0;
                    cursor: pointer;
                }
            }
        }

        .link-icon {
            display: block;
            margin: auto;
            margin-bottom: 20px;
            color: var(--blue-grey-three);
        }
    //}
`

const NavLine = styled.hr`
  margin-top: 21px;
  max-width: 100%;
  height: 1px;
  border: 0;
  background-color: var(--blue-grey-eight);
`

const Nav = () => (
  <React.Fragment>
    <NavWrapper>
        <div>
          <FontAwesomeIcon icon="user" fixedWidth size="lg" className="link-icon" />
          <Link to="/page-2/" className="link-name">About</Link>
        </div>
        <div>
          <FontAwesomeIcon icon="file-code" fixedWidth size="lg" className="link-icon" />
          <Link to="/page-2/" className="link-name">Work</Link>
        </div>
        <div>
          <FontAwesomeIcon icon="phone-alt" fixedWidth size="lg" className="link-icon" />
          <Link to="/page-2/" className="link-name">Contact</Link>
        </div>
    </NavWrapper> 
    <NavLine />
  </React.Fragment>
)

export default Nav