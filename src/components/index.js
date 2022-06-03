/***************************************************************************
*    Citation 1
*    Title: styled-components-responsive-navbar
*    Author: machadop1407
*    Date: 2021
*    Availability: https://github.com/machadop1407/styled-components-responsive-navbar
*    Usage: Portions of this file
***************************************************************************
*    Citation 2
*    Title: How to create a multi-page website using React.js ?
*    Author: namanjaingeeksforgeeks
*    Date: 2022
*    Availability: https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
*    Usage: Portions of this file
****************************************************************************/
import React, { useState, useEffect } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLogo,
  NavbarLink,
  LoginButton,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./NavbarElements.js";

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
            <Logo src={"/images/cat.svg"} alt="Powell Cat's Music" />
            &#160;BruinTunes
          </NavbarLogo>
        </LeftContainer>
        
        <RightContainer>
          <NavbarLink to="/artists"> Artists Pages </NavbarLink>
          <NavbarLink to="/comments"> Comments </NavbarLink>
          <NavbarLink to="/charts"> Charts </NavbarLink>
          <NavbarLink to="/userlist"> Lists </NavbarLink>
          <NavbarLink to="/about"> About us! </NavbarLink>
          <NavbarLink to="/login" onClick={logOutOnClick}>
            <LoginButton> {text} </LoginButton>
          </NavbarLink>
          <OpenLinksButton
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
          </OpenLinksButton>
        </RightContainer>
      </NavbarInnerContainer>

      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home </NavbarLinkExtended>
          <NavbarLinkExtended to="/artists"> Artists Pages </NavbarLinkExtended>
          <NavbarLinkExtended to="/comments"> Comments </NavbarLinkExtended>
          <NavbarLinkExtended to="/charts"> Charts </NavbarLinkExtended>
          <NavbarLinkExtended to="/userlist"> Lists </NavbarLinkExtended>
          <NavbarLinkExtended to="/about"> About us! </NavbarLinkExtended>
          <NavbarLinkExtended to="/login" onClick={logOutOnClick}> 
            <LoginButton> {text} </LoginButton> 
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;