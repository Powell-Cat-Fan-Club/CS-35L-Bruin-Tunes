//credit for the responsive navbar: https://github.com/machadop1407/styled-components-responsive-navbar

import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLinkLogo,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./NavbarElements.js";
import LogoImg from "../images/cat.svg";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkLogo to="/"> 
            <Logo src={LogoImg} alt="Powell Cat's Music" />
            &nbsp;BruinTunes
          </NavbarLinkLogo>
        </LeftContainer>
        
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/artists"> Artists Pages </NavbarLink>
            <NavbarLink to="/comments"> Comments </NavbarLink>
            <NavbarLink to="/charts"> Charts </NavbarLink>
            <NavbarLink to="/userlist"> Lists </NavbarLink>
            <NavbarLink to="/about"> About us! </NavbarLink>
            <NavbarLink to="/login"> Sign In </NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>

      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/artists"> Artists Pages </NavbarLinkExtended>
          <NavbarLinkExtended to="/comments"> Comments </NavbarLinkExtended>
          <NavbarLinkExtended to="/charts"> Charts </NavbarLinkExtended>
          <NavbarLinkExtended to="/userlist"> Lists </NavbarLinkExtended>
          <NavbarLinkExtended to="/about"> About us! </NavbarLinkExtended>
          <NavbarLinkExtended to="/login" as="button"> Sign In </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;