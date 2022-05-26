//credit for the responsive navbar: https://github.com/machadop1407/styled-components-responsive-navbar

import React, { useState, useEffect } from "react";
import {isLoggedIn} from '../pages/pagesLOGIN/finduser.js';
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
import { render } from "@testing-library/react";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const [users, setUsers] = useState();
  
    useEffect(() => {
      async function getUsers() {
        const response = await fetch(`http://localhost:5000/login/`);
  
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
        const users = await response.json();
        setUsers(users);
    }
    getUsers();
    });
    var login = isLoggedIn(users); 
    const text = (login != undefined) ? 'Log Out' : 'Log In';
    
    function logOutOnClick() {
      async function logOut()
      {
        if (login == undefined) {
          return; 
        }
        await fetch(`http://localhost:5000/loggedin/${login._id}`, {
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