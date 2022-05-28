//credit for the responsive navbar: https://github.com/machadop1407/styled-components-responsive-navbar

import React, { useState, useEffect } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLogo,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./NavbarElements.js";
import LogoImg from "../images/cat.svg";
import { render } from "@testing-library/react";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const [user, setUser] = useState();
  
    useEffect(() => {
      async function getUser() {
        const response = await fetch(`http://localhost:5000/loggedinuser`);
  
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
        const user = await response.json();
        setUser(user);
    }
    getUser();
    }); 
    const text = (user != null) ? 'Log Out' : 'Log In';
    
    function logOutOnClick() {
      async function logOut()
      {
        if (user == null) {
          return; 
        }
        await fetch(`http://localhost:5000/loggedin/${user._id}`, {
          method: "PUT", 
          headers: {
            "Content-Type": "application/json",
          }, 
          body: JSON.stringify({isloggedin: false})
        })
        .catch (error => {
          window.alert(error);
          return;
        });

        window.alert("Successfully Logged Out."); 
      }
      logOut(); 
    }

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLogo to="/"> 
            <Logo src={LogoImg} alt="Powell Cat's Music" />
            &nbsp;BruinTunes
          </NavbarLogo>
        </LeftContainer>
        
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/artists"> Artists Pages </NavbarLink>
            <NavbarLink to="/comments"> Comments </NavbarLink>
            <NavbarLink to="/charts"> Charts </NavbarLink>
            <NavbarLink to="/userlist"> Lists </NavbarLink>
            <NavbarLink to="/about"> About us! </NavbarLink>
            <NavbarLink to="/login" onClick={logOutOnClick}> {text} </NavbarLink>
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
          <NavbarLinkExtended to="/login" as="button" onClick={logOutOnClick}> {text} </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;