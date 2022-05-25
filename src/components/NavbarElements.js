//credit for the base for responsive navbar: https://github.com/machadop1407/styled-components-responsive-navbar

import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  height: ${(props) => (props.extendNavbar ? "auto" : "80px")};
  background-color: #2774AE;
  
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: stretch;
  padding-left: 0%;
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  padding-right: 0%;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  /*font-size: x-large;  not set */
  font-family: Arial, Helvetica, sans-serif; /* not set */
  text-decoration: none;
  text-align: center;

  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const NavbarLinkLogo = styled(Link)`
  color: white;
  font-size: xx-large;
  font-family: Arial, Helvetica, sans-serif; /* not set */
  text-decoration: none;
  
  display: flex;
  padding: 0 .5rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
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
  @media (min-width: 800px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: auto;
  @media (min-width: 800px) {
    display: none;
  }
`;