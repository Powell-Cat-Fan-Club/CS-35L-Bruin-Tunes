/***************************************************************************
*    Citation 1
*    Title: styled-components-responsive-navbar
*    Author: machadop1407
*    Date: 2021
*    Availability: https://github.com/machadop1407/styled-components-responsive-navbar
*    Usage: Base for responsive navbar
***************************************************************************
*    Citation 2
*    Title: How to create a multi-page website using React.js ?
*    Author: namanjaingeeksforgeeks
*    Date: 2022
*    Availability: https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
*    Usage: Parts of the navbar
****************************************************************************/
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  height: ${(props) => (props.extendNavbar ? "auto" : "80px")};
  background-color: #2774AE;
  
  display: flex;
  flex-direction: column;

  @media (min-width: 801px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: stretch;
`;

export const RightContainer = styled(LeftContainer)`
  justify-content: flex-end;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLogo = styled(Link)`
  color: white;
  font-size: xx-large;
  font-family: Arial, Helvetica, sans-serif; /* not set */
  text-decoration: none;
  text-align: right;
  
  display: flex;
  align-items: center;
  padding: 0 .5rem;
  height: 100%;
  cursor: pointer;

`;

export const NavbarLink = styled(NavbarLogo)`
  color: white;
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif; /* not set */
  text-align: center;

  padding: 0 1rem;

  /* not what I wanted */

  @media (max-width: 800px) {
    display: none;
  }
`;


export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  text-align: center;
  margin: 10px 0;
`;

export const Logo = styled.img`
  height: 80%;
  width: auto;
`;

export const OpenLinksButton = styled.button`
  height: 100%;
  width: auto;

  background: none;
  border: none;
  margin-right: 1rem;
  
  color: white;
  font-size: 3rem;
  cursor: pointer;
  @media (min-width: 801px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: auto;
  @media (min-width: 801px) {
    display: none;
  }
`;